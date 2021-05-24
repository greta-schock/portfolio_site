const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');


app.use(express.json());
// app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})