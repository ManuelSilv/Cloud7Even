const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const router = express.Router();
//
const projectSchema = new Schema({
  title: { type: String, unique:true, required: true},
  genre: { type: String}, 
  creator: {type: String},
  created: {type: Date, default: Date.now() } // Date.now also works and is a shorter notation.
});

const Project = mongoose.model('Project', projectSchema);


module.exports = Project;
module.exports = router;