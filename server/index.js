// const express = require('express');
// const morgan = require('morgan');
// const axios = require('axios');
const path = require('path');
// const app = express();
// const port = 3000;
const app = require('express')();
const PORT = process.env.PORT || 3000;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');


app.use(express.json());
// app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

// const app = require("express")();
// const PORT = process.env.PORT || 3000;

// app.get("", (req, res) => {
//   res.send('Hello World');
// });

// app.listen(PORT, () => {
//   console.log(`App up at port ${PORT}`)
// })