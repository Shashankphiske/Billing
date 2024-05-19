const express = require('express');
const router = express.Router();
const googleSheetsController = require('../controllers/googleSheetsController');

// Route to write data to Google Sheets
router.post('/placeOrder', googleSheetsController.writeToSheet);

module.exports = router;
