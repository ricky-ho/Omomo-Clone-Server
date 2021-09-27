const Order = require("../models/orders");

const stripe = require("stripe")(process.env.STRIPE_PUB_KEY);
/*
  TODO: HTTP POST /checkout
  - User clicks checkout and submits the cart to the server /checkout route
  - In the /checkout route
    - Make a database call to get the product information
    - Make an API call to Stripe API for payment handling
*/

exports.handle_checkout_intent = (req, res) => {
  /* Given the cart items, calculate the total price of the cart */
  const { items } = req.body;
  items.forEach((item) => console.log(item));
  res.json(req.body);

  /* Create a PaymentIntent with Stripe and return the client secret, a url to the checkout page back to the client,  */
};
