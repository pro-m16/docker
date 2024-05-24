const express = require('express');
const moment = require('moment-timezone');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  res.send(`Current time in your timezone is: ${currentTime}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
