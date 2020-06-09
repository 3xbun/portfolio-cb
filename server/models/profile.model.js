const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String, required: true },
  jobs: { type: String  },
  location: {type: String},
  phone: {type: String},
  image: {type: String, required: true},
  about: {type: String}
}, {
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;