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
    let oldBlock = await Block.find({
      date: block.date,
      hour: block.hour,
      block: block.block
    }).exec();
    if(oldBlock.length > 0) {
      oldBlock[0].color = block.color;
      oldBlock[0].save();
    } else {
      await block.save()
    }
    res.json({success: true});
  } catch(error) {
    res.json({success: false});
  }
}