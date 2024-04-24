const menuController = {};

// Example data for menu items
const menuItems = [
  { id: 1, name: 'Burger', price: 10 },
  { id: 2, name: 'Pizza', price: 12 },
  { id: 3, name: 'Salad', price: 8 },
  // Add more menu items as needed
];

// Controller method to get all menu items
menuController.getAllMenuItems = (req, res) => {
  res.json({ menu: menuItems });
};

module.exports = menuController;
