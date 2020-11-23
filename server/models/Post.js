const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const postSchema = Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Post = new model("Post", postSchema);

module.exports = Post;
