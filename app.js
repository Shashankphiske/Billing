const express = require('express');
const session = require('express-session');
const errorHandler = require('./utils/errorHandler');
const app = express();
const PORT = process.env.PORT || 5000;

// Configure express-session middleware
app.use(session({
  secret: 'your-secret-key', // Secret key to sign the session ID cookie
  resave: false,
  saveUninitialized: false
}));

// Sample user data (for demonstration purposes)
const users = [
  { id: 1, username: 'hatkevada', password: 'Abhay@123' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Middleware to parse JSON bodies
app.use(express.json());
const menuRoutes = require('./routes/menuRoutes');
const cartRoutes = require('./routes/cartRoutes');
const googleSheetsRoutes = require('./routes/googleSheetsRoutes');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Error handling middleware
app.use(errorHandler);

// Define a route handler for the login page (GET request)
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Define a route handler for handling login form submission (POST request)
// Define a route handler for handling login form submission (POST request)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the submitted username and password match any user in the database
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Store user information in the session
    req.session.user = user;
    // If authentication succeeds, redirect to the menu page
    res.redirect('/menu');
  } else {
    // If authentication fails, clear the session and redirect back to the login page with an error message
    console.log('Authentication failed. Clearing session.');
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      res.redirect('/login?error=invalid');
    });
  }
});


// Define a route handler for the menu page
app.get('/menu', (req, res) => {
  // Check if the user is authenticated (i.e., if they have a session)
  if (req.session && req.session.user) {
    // If authenticated, render the menu page
    res.sendFile(__dirname + '/public/menu.html');
  } else {
    // If not authenticated, redirect back to the login page
    res.redirect('/login');
  }
});

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the billing software!');
});

// Use routes
app.use(menuRoutes);
app.use(cartRoutes);
app.use(googleSheetsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});