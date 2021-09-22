const express = require("express");
const router = express.Router();

const Product = require("../models/product");

router.get("/", async (req, res, next) => {
  console.log("GET /products");
  Product.find({}).exec((err, products) => {
    if (err) {
      return next(err);
    }

    return res.json(products);
  });
});

module.exports = router;
