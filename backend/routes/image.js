const router = require('express').Router();
const fs = require('fs');
let Image = require('../models/image.model');

router.route('/').get((req, res) => {
  Image.find()
    .then((images) => res.json(images))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.post('/api/photo', function (req, res) {
  var newItem = new Item();
  newItem.img.data = fs.readFileSync(req.files.userPhoto.path);
  newItem.img.contentType = 'image/svg';
  newItem.save();
});
