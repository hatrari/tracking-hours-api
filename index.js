const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

let blocks = [
  { date: '04/01/2021', hour: '13', block: '1', color: 'red' },
  { date: '03/01/2021', hour: '10', block: '1', color: 'red' }
];

app.get('/', (req, res) => { 
  res.json(blocks);
});

app.get('/:date', (req, res) => { 
  let date = req.params.date;
  res.json(blocks.filter(b => b.date === date));
});

app.post('/', (req, res) => {
  let block = req.body;
  let blocksFiltred = blocks.filter(b => 
    !(b.date === block.date && b.hour === block.hour && b.block === block.block) 
  );
  blocksFiltred.push(block);
  blocks = blocksFiltred;
  res.json(blocksFiltred);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})