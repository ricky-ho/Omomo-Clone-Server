const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionSchema = new Schema(
  {
    label: String,
    price: Number,
  },
  { _id: false }
);

const optionCategorySchema = new Schema({
  label: String,
  limit: Number,
  options: [optionSchema],
});

module.exports = mongoose.model("OptionCategory", optionCategorySchema);
