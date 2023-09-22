const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    requied: true,
  },
  buy: {
    type: String,
    requied: true,
  },
  sell: {
    type: String,
    requied: true,
  },
  volume: {
    type: String,
    requied: true,
  },
  base_unit: {
    type: String,
    requied: true,
  },
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;