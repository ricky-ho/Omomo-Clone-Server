const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema(
  {
    label: String,
    price: Number,
  },
  { _id: false }
);

const optionsSchema = new Schema({
  label: String,
  limit: Number,
  options: [childSchema],
});

module.exports = mongoose.model("Options", optionsSchema);
