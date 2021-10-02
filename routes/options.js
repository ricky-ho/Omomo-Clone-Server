const express = require("express");
const router = express.Router();

const optionsController = require("../controllers/optionsController");

/* GET - Return an array of option categories with their corresponding options */
router.get("/", optionsController.get_all_options);

module.exports = router;
