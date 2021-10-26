const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

/* GET - Return an array of all product categories and products within that category */
router.get("/", productsController.get_all_products);

module.exports = router;
