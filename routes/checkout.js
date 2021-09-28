const express = require("express");
const router = express.Router();

const checkoutController = require("../controllers/checkoutController");

/* POST - Handle the creation of Stripe PaymentIntent */
router.post("/", checkoutController.handle_checkout_intent);

module.exports = router;
