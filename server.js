require('./data/context');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

const blockController = require('./controllers/block');

app.get('/', blockController.get);

app.get('/:date', blockController.getByDate);

app.post('/', blockController.post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})