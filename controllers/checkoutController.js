const {
  calculateTotalPriceOfItems,
  getProductsInfoFromCart,
} = require("../utils/cartUtils");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/*
  TODO: HTTP POST /checkout
  - User clicks checkout and submits the cart to the server /checkout route
  - In the /checkout route
    - Make a database call to get the product information
    - Make an API call to Stripe API for payment handling
*/

exports.handle_checkout_intent = async (req, res) => {
  const { items } = req.body;

  try {
    const totalPrice = await calculateTotalPriceOfItems(items);
    const products = await getProductsInfoFromCart(items);
    console.log(typeof totalPrice);

    /* Create a PaymentIntent with Stripe and return the client secret, a url to the checkout page back to the client */
    const { client_secret } = await stripe.paymentIntents.create({
      amount: totalPrice * 100, // Currency in cents
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).json({
      client_secret,
      totalPrice,
      products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
