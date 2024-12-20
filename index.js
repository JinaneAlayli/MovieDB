
const express = require('express');
const app = express();
app.get('*', (req, res) => {
  res.send('OK'); 
});
app.listen(1464, () => {
  console.log('Server is running on http://localhost:1464');
});
