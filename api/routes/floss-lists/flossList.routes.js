const express = require('express');
const flossListService = require('./flossList.service');
const requireAuth = require('../../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(requireAuth, async (req, res, next) => {
    const lists = await flossListService.getLists(req.query.user);
    res.status(200).json({ data: lists });
  })
  .post(async (req, res, next) => {
    try {
      const list = await flossListService.createList(req.body.data);
      res.status(201).json({ data: list });
    } catch (e) {
      next(e);
    }
  });

router
  .route('/:flossListId')
  .get(async (req, res, next) => {
    try {
      const list = await flossListService.getList(req.params.flossListId);
      res.status(200).json({ data: list });
    } catch (e) {
      next(e);
    }
  })
  .patch(async (req, res, next) => {
    try {
      const list = await flossListService.updateList(
        req.params.flossListId,
        req.body.data
      );
      res.status(200).json({ data: list });
    } catch (e) {
      next(e);
    }
  });

exports.router = router;
