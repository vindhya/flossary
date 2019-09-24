const express = require('express');
const userService = require('./user.service');
const tokenService = require('../../utils/token.service.js');

const router = express.Router();

router.route('/signup').post(async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body.data);
    res.status(201).json({ data: user });
  } catch (e) {
    next(e);
  }
});

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

exports.router = router;
