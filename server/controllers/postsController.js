const Post = require('../models/Post');

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }

    res.send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPosts = async (req, res) => {
  const currentPage = +req.query.page || 1;
  const pageSize = +req.query.pageSize || 1;

  try {
    const total = await Post.countDocuments();
    const posts = await Post.find({})
      .limit(pageSize)
      .skip(pageSize * (currentPage - 1))
      .sort({ createdAt: -1 })
      .populate('user', 'name avatar')
      .populate('comments user');

    res.send({
      data: posts,
      page: {
        pageSize,
        currentPage,
        totalPage: Math.ceil(total / pageSize),
        totalData: total,
      },
    });
  } catch (error) {
    res.status(500).send();
  }
};

const createPost = async (req, res) => {
  try {
    let post;

    if (req.file && req.file.filename) {
      post = new Post({
        ...req.body,
        image: `api/${req.file.filename}`,
        user: req.user,
      });
    } else {
      post = new Post({
        ...req.body,
        user: req.user,
      });
    }

    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send();
  }
};

const updatePost = async (req, res) => {
  try {
    let payload = req.file
      ? { ...req.body, image: `api/${req.file.filename}` }
      : req.body;

    const result = await Post.updateOne({ _id: req.params.id }, payload);

    if (result.nModified < 1) {
      return res.status(401).send({ message: 'Not allow to modify the post' });
    }

    res.send(result);
  } catch (error) {
    res.status(500).send();
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }

    res.send(post);
  } catch (error) {
    res.status(500).send();
  }
};

// @desc create post comment
// @route /api/posts/:id/comments
// @access private
const createPostComment = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).send('Post not found');
    }

    const comment = {
      user: req.user._id,
      name: req.user.name,
      avatar: req.user.avatar,
      content: req.body.comment,
    };

    post.comments.push(comment);

    await post.save();

    res.send(post.comments[post.comments.length - 1]);
  } catch (error) {
    res.status(500).send();
  }
};

// @desc delete post comment
// @route /api/post/:postId/comments/:commentId
// @access private
const deletePostComment = async (req, res) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).send('Post not found');
    }

    const filteredComments = post.comments.filter(
      (comment) => String(comment._id) !== commentId
    );

    post.comments = filteredComments;

    await post.save();

    res.send(null);
  } catch (error) {
    res.status(500).send();
  }
};

// @desc like post comment
// @route /api/post/:id/like
// @access private
const likePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).send('Post not found');
    }

    const alreadyExist = post.likes.find((userId) => {
      return String(userId) === req.body.userId;
    });

    if (alreadyExist) {
      post.likes = post.likes.filter(
        (userId) => String(userId) !== req.body.userId
      );
    } else {
      post.likes.push(req.body.userId);
    }

    await post.save();

    const lastIndex = post.likes.length - 1;

    res.send(post.likes[lastIndex]);
  } catch (error) {
    res.status(500).send();
  }
};

// @desc get post likes
// @route /api/posts/:id/likes
// @access private
const getLikes = async (req, res) => {
  const id = req.params.id;

  try {
    const { likes } = await Post.findById(id).populate('likes').select('likes');

    // remove the password
    likesWithoutPassword = likes.map((user) => {
      return { _id: user._id, name: user.name, avatar: user.avatar };
    });

    res.send(likesWithoutPassword);
  } catch (error) {
    res.statsu(500).send();
  }
};

module.exports = {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
  getLikes,
  createPostComment,
  deletePostComment,
};
