const OptionCategory = require("../models/optionCategories");

exports.get_all_options = async (req, res) => {
  try {
    const options = await OptionCategory.find({}).exec();
    res.status(200).json(options);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
