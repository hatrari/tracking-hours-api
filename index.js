const Block = require('./models/block');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blocks', 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
  });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => { 
  let blocks = await Block.find({}).exec();
  res.json(blocks);
});

app.get('/:date', async (req, res) => { 
  let date = req.params.date;
  let blocks = await Block.find({date: date}).exec();
  res.json(blocks);
});

app.post('/', async (req, res) => {
  try {
    let block = new Block(req.body);
    await block.save()
    let blocksFiltred = blocks.filter(b => 
      !(b.date === block.date && b.hour === block.hour && b.block === block.block) 
    );
    blocksFiltred.push(block);
    blocks = blocksFiltred;
    res.json({success: true});
  } catch(error) {
    res.json({success: false});
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})