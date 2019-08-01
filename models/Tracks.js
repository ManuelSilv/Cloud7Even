const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema
const trackSchema = new Schema({
  title: {type: URL},
  created: {type: Date, default: Date.now() }
})

const Track = mongoose.model("track", trackSchema);

module.exports = Track;