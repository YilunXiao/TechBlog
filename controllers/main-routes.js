const router = require('express').Router();
const { Blog, User } = require('../models');

// Render Homepage
router.get('/', async (req, res) => {
  try {
    // RENDERS HANDLEBAR VIEWS
    res.render('homepage', {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;