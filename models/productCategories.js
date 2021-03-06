const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = require("./products");

const productCategorySchema = new Schema({
  name: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: Product }],
});

module.exports = mongoose.model("ProductCategory", productCategorySchema);
