const router = require('express').Router();
let Portfolio = require('../models/portfolio.model');

router.route('/').get((req, res) => {
  Portfolio.find()
    .then(port => res.json(port))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const image = req.body.image;

  const newPort = new Portfolio({title, image});

  newPort.save()
    .then(() => res.json('Work added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;