require('./data/context');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

const blockRoutes = require('./routes/block');
app.use('', blockRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});