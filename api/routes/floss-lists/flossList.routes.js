const express = require('express');
const flossListService = require('./flossList.service');

const router = express.Router();

router.route('/').post(async (req, res, next) => {
  try {
    const list = await flossListService.createList(req.body.data);
    res.status(201).json({ data: list });
  } catch (e) {
    next(e);
  }
});

router.route('/:flossListId').get(async (req, res, next) => {
  try {
    const list = await flossListService.getList(req.params.flossListId);
    res.status(200).json({ data: list });
  } catch (e) {
    next(e);
  }
});

exports.router = router;
