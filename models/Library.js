const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const router = express.Router();
//
const librarySchema = new Schema({
  title: { type:'' , unique:true, required: true},
  genre: { type: String}, 
  creator: {type: String},
  created: {type: Date, default: Date.now() } // Date.now also works and is a shorter notation.
});

const Library = mongoose.model('Library', librarySchema);


module.exports = Library;
module.exports = router;