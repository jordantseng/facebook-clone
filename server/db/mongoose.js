const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('mongoDB connected');
  } catch (error) {
    console.log('mongoDB connected failed');
  }
};

module.exports = connectDB();
