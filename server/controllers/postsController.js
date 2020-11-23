const Post = require("../models/Post");

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
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
      .populate("user", "name avatar");

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
      return res.status(401).send({ message: "Not allow to modify the post" });
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
      return res.status(404).send({ message: "Post not found" });
    }

    res.send(post);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
};
