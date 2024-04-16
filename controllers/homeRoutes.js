const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

require('colors');

console.log('hello!'.green); // outputs green text
console.log('Thanks for using our food focused social networking site.'.underline.red) // outputs red underlined text
console.log('Share your favorite recipes!'.inverse); // inverses the color
console.log('Enjoy'.rainbow); // rainbow
console.log('Farewell'.trap.blue); // Drops the bass


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


router.get('/addpost', (req, res) => {
  res.render('addPost');
});

router.get('/post/:id', async (req, res) => {
  const post = await Post.findOne({
    where: {
      id: req.params.id
    }
  });
  // const post = postData.map((post) => post.get({ plain: true }));
  res.render('singlePost', post);
});

module.exports = router;