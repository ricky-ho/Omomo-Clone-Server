const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OptionCategory = require("./optionCategories");

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  modalImageURL: { type: String, required: true },
  inStock: { type: Boolean },
  modifications: [
    {
      type: Schema.Types.ObjectId,
      ref: OptionCategory,
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
