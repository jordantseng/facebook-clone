const Post = require("../models/Post");

const getMyPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user })
      .sort({ createdAt: -1 })
      .populate("user", "name avatar");

    if (!posts) {
      return res.status(404).send({ message: "Posts not found" });
    }

    res.send({ data: posts });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getMyPost = async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }

    res.send({ data: post });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteMyPost = async (req, res) => {
  const _id = req.params.id;
  try {
    const post = await Post.findOneAndDelete({ _id, user: req.user._id });

    if (!post) {
      return res.status(401).send({ message: "Not allow to delete" });
    }
    res.send(post);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateMyPost = async (req, res) => {
  try {
    let payload = req.file
      ? { ...req.body, image: `api/${req.file.filename}` }
      : req.body;

    const result = await Post.updateOne(
      { _id: req.params.id, user: req.user._id },
      payload
    );

    if (result.nModified < 1) {
      return res.status(400).send({ message: "Not allow to modify the post" });
    }

    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getMyPost,
  getMyPosts,
  updateMyPost,
  deleteMyPost,
};
