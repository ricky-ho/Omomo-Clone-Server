const e = require("express");
const {
  validateAndCreateNewCart,
  calculateTotalCartPrice,
} = require("../utils/cartUtils");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handle_checkout_intent = async (req, res) => {
  const cart = req.body;

  try {
    const newCart = await validateAndCreateNewCart(cart);
    const totalPrice = await calculateTotalCartPrice(newCart);

    res.status(200).json({
      totalPrice,
    });
  } catch (err) {
    res
      .status(400)
      .json({ error: { message: "Unable to validate cart information" } });
  }
};

exports.create_payment_intent = async (req, res) => {
  const { totalAmount, paymentMethodTypes, currency } = req.body;

  /* Create a PaymentIntent with Stripe and return the client secret */
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount * 100,
      currency: currency,
      payment_method_types: [...paymentMethodTypes],
    });

    res.status(200).json(paymentIntent);
  } catch (err) {
    res.status(400).json({ error: { message: err.message } });
  }
};
