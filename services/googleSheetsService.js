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
  const spreadsheetId = '1YmRycO7YsHWOpWnJ8jOr29epCsZeunbVv1AnlEQQkC4'; // Your spreadsheet ID
  const range = 'Sheet1!A1:E1'; // Example range to write data to

  const now = new Date();
  const date = now.toLocaleDateString(); // Get date
  const time = now.toLocaleTimeString(); // Get time

  const data = [[date, time, orderItems, totalAmount, paymentMode]];

  try {
    const response = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption:"USER_ENTERED",
      resource:{
          values:data,
  
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
