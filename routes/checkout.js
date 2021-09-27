const express = require("express");
const router = express.Router();

const checkoutController = require("../controllers/checkoutController");

router.post("/", checkoutController.handle_checkout_intent);

module.exports = router;
