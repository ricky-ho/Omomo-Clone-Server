require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    let db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return db.connection;
  } catch (error) {
    return null;
  }
};

module.exports = connectToDatabase;
