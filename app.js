const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const mongo_url = process.env.MONGO_URI;
mongoose.connect(mongo_url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "Could not establish connection to MongoDB")
);

const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/products", productsRouter);

module.exports = app;
