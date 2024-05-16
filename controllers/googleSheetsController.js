const sheets = require('../services/googleSheetsService');

const googleSheetsController = {};

// Controller method to write data to Google Sheets
googleSheetsController.writeToSheet = async (req, res) => {
  try {
    const { data } = req.body;
    const range = 'A1'; // Define the range to write data to
    const resource = { values: data };
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '1YmRycO7YsHWOpWnJ8jOr29epCsZeunbVv1AnlEQQkC4',
      range,
      valueInputOption: 'RAW',
      resource,
    });
    console.log('Data written to Google Sheets:', response.data);
    res.json({ message: 'Data written to Google Sheets successfully' });
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
    res.status(500).json({ error: 'Failed to write data to Google Sheets' });
  }
};

module.exports = googleSheetsController;
