const ProductCategory = require("../models/productCategories");

exports.get_all_products = async (req, res) => {
  try {
    const productsByCategory = await ProductCategory.find()
      .sort({ _id: "ascending" })
      .populate("products")
      .exec();

    res.status(200).json(productsByCategory);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
