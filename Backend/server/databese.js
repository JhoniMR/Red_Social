const mongoose = require('mongoose');


mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

const URI = 'mongodb://localhost/red-social';

mongoose.connect(URI)
  .then(db => console.log('Mongo esta conectado'))
  .catch(err => console.error(err));
  
module.exports = mongoose;