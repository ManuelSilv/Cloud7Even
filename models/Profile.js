const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema
const profileSchema = new Schema({
  name: {type: String, unique: true}
  
})

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;