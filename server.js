// Import necessary modules
const express = require('express');
const errorHandler = require('./utils/errorHandler');
const app = express();
const PORT = process.env.PORT || 5000; // Choose your desired port

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const menuRoutes = require('./routes/menuRoutes');
const cartRoutes = require('./routes/cartRoutes');
const googleSheetsRoutes = require('./routes/googleSheetsRoutes');

// Use routes
app.use(menuRoutes);
app.use(cartRoutes);
app.use(googleSheetsRoutes);
app.use(express.static('public'));
// Error handling middleware
app.use(errorHandler);
// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the billing software!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
