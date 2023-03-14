const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
http://localhost:3001/api/categories

router.get('/', async (req, res) => {
  try {

    const categories = await Category.findAll({
      include: Product,
    });

    res.status(200).json(categories);
  } 
  
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {

    const category = await Category.findByPk(req.params.id, {
      include: Product,
    });

    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    res.status(200).json(category);
  } 
  
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
