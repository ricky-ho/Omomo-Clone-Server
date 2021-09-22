const Product = require("../models/product");

exports.get_products = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
