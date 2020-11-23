const express = require("express");
const auth = require("../middlewares/auth");
const uploadImage = require("../middlewares/uploadImage");
const {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");
const {
  getMyPost,
  getMyPosts,
  updateMyPost,
  deleteMyPost,
} = require("../controllers/myPostsController");

const router = express.Router();

router
  .route("/:id/me")
  .get(auth, getMyPost)
  .delete(auth, deleteMyPost)
  .put(auth, uploadImage.single("image"), updateMyPost);

router.route("/me").get(auth, getMyPosts);

// TODO: for admin
router
  .route("/:id")
  .get(getPost)
  .put(auth, uploadImage.single("image"), updatePost)
  .delete(auth, deletePost);

router
  .route("")
  .get(getPosts)
  .post(auth, uploadImage.single("image"), createPost);

module.exports = router;
