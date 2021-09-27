const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionSchema = new Schema(
  {
    label: String,
    price: Number,
  },
  { _id: false }
);

let orderSchema = new Schema({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      quantity: Number,
      adjustments: [optionSchema],
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
