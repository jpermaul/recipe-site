const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['email', 'ASC']],
    });

    const postData = await Post.findAll({
      order: [['title', 'ASC']],
    });



    const users = userData.map((user) => user.get({ plain: true }));
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      users,
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/recipes', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }
//   res.render('recipes');
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signUp', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signUp');
});

module.exports = router;