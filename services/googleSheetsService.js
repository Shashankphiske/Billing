const { google } = require('googleapis');
const credentials = require('../config/google_credentials.json');

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

const sheets = google.sheets({ version: 'v4', auth });

async function writeToSheet(orderItems, totalAmount, paymentMode) {
  const spreadsheetId = '18jY-DuelEAdMcWOW0-wVJafsia5vXQv8v_7rM3lBfwM'; // Your spreadsheet ID
  const range = 'Sheet1!A1:E1'; // Example range to write data to

  const now = new Date();
  const date = now.toLocaleDateString(); // Get date
  const time = now.toLocaleTimeString(); // Get time

  const data = [[date, time, orderItems, totalAmount, paymentMode]];

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: data,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
    throw error;
  }
}

module.exports = { writeToSheet };
