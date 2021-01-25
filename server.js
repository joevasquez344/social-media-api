const express = require('express');
const app = express();
const db = require('./config/db');
const dotevn = require('dotenv');

// Loads all variables from .env file into this file
dotevn.config();

// db function now has the ability to successfully run process.env.<variable>
db();

app.get('/', (req, res) => {
  res.send('Test Route');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
