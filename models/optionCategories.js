const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionSchema = new Schema(
  {
    label: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }
);

const optionCategorySchema = new Schema({
  label: { type: String, required: true },
  limit: { type: Number, required: true },
  options: [optionSchema],
});

module.exports = mongoose.model("OptionCategory", optionCategorySchema);
