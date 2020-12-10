const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const commentSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String },
    avatar: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

const likeSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const postSchema = Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    comments: { type: [commentSchema] },
    likes: {
      type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = new model('Post', postSchema);

module.exports = Post;
