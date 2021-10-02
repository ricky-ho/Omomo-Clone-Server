const Product = require("../models/products");

exports.calculateTotalPriceOfItems = async (items) => {
  let totalPrice = 0;

  for (let item of items) {
    let product = await Product.findById(item.id).exec();

    item.adjustments.forEach(
      (option) => (totalPrice += Math.abs(option.price))
    );
    totalPrice += product.price;
  }

  return totalPrice;
};

exports.getProductsInfoFromCart = async (items) => {
  let products = [];

  for (let item of items) {
    let product = await Product.findById(item.id).lean().exec();

    product.adjustments = item.adjustments;
    products.push(product);
  }

  return products;
};
