const express = require("express");
const auth = require("../middlewares/auth");
const uploadImage = require("../middlewares/uploadImage");
const {
  signup,
  login,
  updateMyAvatar,
  getMyProfile,
  updateMyProfile,
  updateMyPassword,
  validateMyPassword,
} = require("../controllers/userController");

const router = express.Router();

router.route("").post(signup);

router.route("/login").post(login);

router.route("/me").get(auth, getMyProfile).put(auth, updateMyProfile);

router
  .route("/me/password")
  .post(auth, validateMyPassword)
  .patch(auth, updateMyPassword);

router
  .route("/me/avatar")
  .put(auth, uploadImage.single("avatar"), updateMyAvatar);

module.exports = router;
