const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Schema, model } = mongoose;

const userSchema = Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, default: '/api/default-user-avatar.jpg' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    isAdmin: { type: Boolean, default: false },
  },
  { timesstamps: true }
);

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Invalid user credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid user credentials');
  }

  return user;
};

userSchema.methods.generateAuthToken = function () {
  const user = this;

  const token = jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );

  return token;
};

userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = new model('User', userSchema);

module.exports = User;
