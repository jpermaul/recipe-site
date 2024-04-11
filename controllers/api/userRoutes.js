const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/signUp', async (req, res) => {
  console.log(req.body)
  const findUser = await User.findOne({ where: { email: req.body.email } });
  console.log(findUser)
  if(findUser) {
      res.status(400).json({ message: 'Looks like there is already a user with that username. Click the login button to sign in or create a different username.' });
      return;
  } else{
    try {
      console.log(User)
      const user = await User.create({
          email: req.body.email,
          password: req.body.password
      });
console.log(user)
      req.session.save(() => {
          req.session.user_id = user.id;
          req.session.logged_in = true;
          res.status(200).json(user);
      });
       
      } catch (error) {
              res.status(500).json(error)
          }
        }
});

module.exports = router;