const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.json());
app.use(express.static(PUBLIC_DIR));


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
