const User = require('../models/User');

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exsistedUser = await User.findOne({ email });

    if (exsistedUser) {
      return res.status(400).send({ message: 'User already exsisted' });
    }

    const user = new User({ name, email, password });

    const token = user.generateAuthToken();

    await user.save();

    res.status(201).send({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      isAdmin: user.isAdmin,
      userToken: { token, expiresIn: 3600 },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);

    const token = user.generateAuthToken();

    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      isAdmin: user.isAdmin,
      userToken: { token, expiresIn: 3600 },
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateMyAvatar = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    if (!user) {
      res.status(404).send('user not found');
    }

    user.avatar = `api/${req.file.filename}`;

    await user.save();

    res.json(user.avatar);
  } catch (error) {
    res.status(500).send();
  }
};

const getMyProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id }).select('-password');

    if (!user) {
      res.status(404).send('user not found');
    }

    res.send(user);
  } catch (error) {}
};

const updateMyProfile = async (req, res) => {
  const { name } = req.body;
  try {
    const user = await User.findById(req.user._id);

    user.name = name || user.name;

    await user.save();

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    res.send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const validateMyPassword = async (req, res) => {
  try {
    await User.findByCredentials(req.user.email, req.body.currentPassword);

    res.send(null);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateMyPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmedNewPassword } = req.body;

    if (newPassword !== confirmedNewPassword) {
      return res.status(400).send({ message: 'passwords are not match' });
    }

    const user = await User.findByCredentials(req.user.email, currentPassword);

    user.password = newPassword;

    await user.save();

    res.send({ message: 'Password updates successfully' });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  signup,
  login,
  updateMyAvatar,
  getMyProfile,
  validateMyPassword,
  updateMyProfile,
  updateMyPassword,
};
