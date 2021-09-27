const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

/* GET - Return an array of all products */
router.get("/", productsController.get_products);

module.exports = router;
