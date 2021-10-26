require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    let db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
    return db.connection;
  } catch (error) {
    console.error("MongoDB connection FAIL");
    return null;
  }
};

module.exports = connectToDatabase;
