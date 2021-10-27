const ProductCategory = require("../models/productCategories");
const OptionCategory = require("../models/optionCategories");

exports.get_all_products = async (req, res) => {
  try {
    const productsByCategory = await ProductCategory.find()
      .sort({ _id: "ascending" })
      .populate("products")
      .populate({
        path: "products",
        populate: {
          path: "modifications",
          model: OptionCategory,
        },
      })
      .exec();

    res.status(200).json(productsByCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};
