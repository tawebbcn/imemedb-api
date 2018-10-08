'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema({
  lineOne: {
    type: String
  },
  lineTwo: {
    type: String
  },
  category: {
    type: String,
    enum: [
      'waiting',
      'not-simply',
      'other'
    ]
  }
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
