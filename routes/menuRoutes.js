const express = require('express');
const router = express.Router();
const { writeToSheet } = require('../services/googleSheetsService');

router.post('/placeOrder', async (req, res) => {
  try {
    const { orderItems, totalAmount, paymentMode } = req.body;
    await writeToSheet(orderItems, totalAmount, paymentMode); // Write data to Google Sheet
    res.status(200).json({ success: true, message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to place order' });
  }
});

module.exports = router;
