const express = require('express');
const userService = require('./user.service');
const tokenService = require('../../utils/token.service.js');
const flossListService = require('../floss-lists/flossList.service');

const router = express.Router();

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
