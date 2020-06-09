const router = require('express').Router();
let Profile = require('../models/profile.model');

router.route('/').get((req, res) => {
  Profile.find()
    .then(port => res.json(port))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name
  const jobs = req.body.jobs
  const location = req.body.location
  const phone = req.body.phone
  const image = req.body.image
  const about = req.body.about

  const newProfile = new Profile({
    name,
    jobs,
    location,
    phone,
    image,
    about
  });

  newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;