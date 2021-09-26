const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

/* GET - Return an array of all products */
router.get("/", productController.get_products);

module.exports = router;
