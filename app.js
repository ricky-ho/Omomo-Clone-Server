const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const connectToDatabase = require("./config/database");
connectToDatabase();

const productsRouter = require("./routes/products");
const optionsRouter = require("./routes/options");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/api/products", productsRouter);
app.use("/api/options", optionsRouter);

module.exports = app;
