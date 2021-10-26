const Product = require("../models/products");

exports.validateAndCreateNewCart = async (items) => {
  const newCart = [];

  for (let item of items) {
    let product = await Product.findById(item.product._id).exec();

    const newProduct = {
      product,
      quantity: item.quantity,
      modifications: item.modifications,
      itemSubtotal: calculateItemSubtotal(
        product,
        item.quantity,
        item.modifications
      ),
    };

    newCart.push(newProduct);
  }

  return newCart;
};

exports.calculateTotalCartPrice = async (cart) => {
  return cart.reduce((total, item) => {
    return (total += item.itemSubtotal);
  }, 0);
};

/* HELPER FUNCTIONS */

const calculateItemSubtotal = (product, quantity, modifications) => {
  let extraCharge = calculateModificationPrices(modifications);
  let basePrice = product.price;
  return (basePrice + extraCharge) * quantity;
};

const calculateModificationPrices = (modifications) => {
  let optionGroups = Object.entries(modifications);

  let extraCharges = optionGroups.reduce((subtotal, group) => {
    const [, selected] = group;

    if (Array.isArray(selected)) {
      return (subtotal += selected.reduce(
        (sum, topping) => (sum += topping.price),
        0
      ));
    }

    return (subtotal += selected.price);
  }, 0);

  return extraCharges;
};
