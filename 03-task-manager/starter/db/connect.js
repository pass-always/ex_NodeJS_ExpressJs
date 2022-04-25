const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    // If use mongoose V6, it is not necessary
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
