const Product = require("../models/product");

exports.get_products = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
