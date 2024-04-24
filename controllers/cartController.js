const cartController = {};

// Example data for the cart (can be stored in memory or database)
let cartItems = [];

// Controller method to add an item to the cart
cartController.addToCart = (req, res) => {
  const { itemId, quantity } = req.body;
  // Add logic to validate itemId and quantity
  cartItems.push({ itemId, quantity });
  res.json({ message: 'Item added to cart successfully' });
};

// Controller method to view the cart
cartController.viewCart = (req, res) => {
  res.json({ cart: cartItems });
};

module.exports = cartController;
