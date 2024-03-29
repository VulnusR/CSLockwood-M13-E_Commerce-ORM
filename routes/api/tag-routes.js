const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
http://localhost:3007/api/tags

router.get('/', async (req, res) => {
  try {

    const tags = await Tag.findAll({
      include: Product
    });

    res.status(200).json(tags);
  } 
  
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {

    const tag = await Tag.findByPk(req.params.id, {
      include: Product
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json(tag);
  } 
  
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {

    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } 
  
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id } }
    );

    if (updatedTag[0] === 0) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json({ message: 'Tag updated successfully' });
  } 
  
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const numRowsAffected = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (numRowsAffected === 0) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json({ message: 'Tag deleted successfully' });
  } 
  
  catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;
