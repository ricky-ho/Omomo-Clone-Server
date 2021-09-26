const Options = require("../models/options");

exports.get_options = async (req, res) => {
  try {
    const options = await Options.find({}).exec();
    res.status(200).json(options);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
