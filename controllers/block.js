const Block = require('../models/block');

exports.get = async (req, res) => { 
  let blocks = await Block.find({}).exec();
  res.json(blocks);
}

exports.getByDate = async (req, res) => { 
  let date = req.params.date;
  let blocks = await Block.find({date: date}).exec();
  res.json(blocks);
}

exports.post = async (req, res) => {
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
}