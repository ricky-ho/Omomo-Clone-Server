const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  imageURL: String,
  inStock: Boolean,
  category: String,
});

module.exports = mongoose.model("Product", productSchema);
