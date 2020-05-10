const router = require('express').Router();
let Products = require('../models/product.model');

router.route('/').get((req, res) => {
  Products.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newProduct = new Products({
    title,
    description,
  });

  newProduct
    .save()
    .then(() => res.json('Product added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Products.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Products.findByIdAndDelete(req.params.id)
    .then(() => res.json('product deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Products.findById(req.params.id)
    .then((product) => {
      product.title = req.body.title;
      product.description = req.body.description;
      // product.duration = Number(req.body.duration);
      // product.date = Date.parse(req.body.date);

      product
        .save()
        .then(() => res.json('product updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
