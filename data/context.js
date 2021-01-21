const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blocks', 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
  }
);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));