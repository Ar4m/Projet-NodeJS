const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const { forwardAuthenticated } = require('../config/auth');

const Post = require('../models/Post');

router.get('/dashboard', forwardAuthenticated, (req, res) => res.render('dashboard'));

router.post('/dashboard', (req, res) => {
  const { title, text } = req.body;
  const newPost = new Post({
    title,
    text
  });
  newPost
    .save()
    .then(post => {
        req.flash(
          'success_msg',
          'Post créé'
        );
      })
});

module.exports = router;
