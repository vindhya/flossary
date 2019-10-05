const express = require('express');
// const passport = require('passport');
const userService = require('./user.service');
const tokenService = require('../../utils/token.service.js');
const flossListService = require('../floss-lists/flossList.service');

const router = express.Router();

// require('../../middleware/passport');

router.route('/login').post(async (req, res, next) => {
  try {
    const user = await userService.isUser(req.body.data);
    if (user) {
      const token = await tokenService.issueToken(user);
      res.status(200).json({ data: { token } });
    } else {
      next();
    }
  } catch (e) {
    next(e);
  }
});

// router.route('/login').post(
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   })
// );

router.route('/signup').post(async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body.data);
    res.status(201).json({ data: user });
  } catch (e) {
    next(e);
  }

  // passport.authenticate('register', (err, user, info) => {
  //   console.log('err', err);
  //   console.log('user', user);
  //   console.log('info', info);
  //   if (err) {
  //     console.log(err);
  //   }
  //   if (info != undefined) {
  //     console.log(info.message);
  //     res.send(info.message);
  //   } else {
  //     req.logIn(user, err => {
  //       const data = {
  //         email: req.body.data.email
  //       };
  //       User.findOne({ email: data.email }).then(user => {
  //         user.email = data.email;
  //         user.save().then(() => {
  //           console.log('user created in db');
  //           res.status(200).send({ message: 'user create' });
  //         });
  //       });
  //     });
  //   }
  // })(req, res, next);
});

router
  .route('/')
  // TODO: add authorization here so that only super admins can get all users
  .get(async (req, res, next) => {
    try {
      const users = await userService.getUsers();
      res.status(200).json({ data: users });
    } catch (e) {
      next(e);
    }
  });

// router.route('/test').get(async (req, res, next) => {
//   try {
//     const { email } = req.body.data;
//     const user = await User.findOne({ email });
//     console.log('user', user);
//     res.status(200).json({ data: user });
//   } catch (e) {
//     next(e);
//   }
// });

router
  .route('/:id/floss-lists')
  // TODO: add authorization here so only the user with the same id as this route can access
  .get(async (req, res, next) => {
    try {
      const lists = await flossListService.getListsByUser(req.params.id);
      res.status(200).json({ data: lists });
    } catch (e) {
      next(e);
    }
  });

exports.router = router;
