const express = require('express');
const flossService = require('./floss.service');

const router = express.Router();

router.route('/').get(async (req, res, next) => {
  try {
    const foundFloss = await flossService.getAllFloss();
    res.status(200).json({ data: foundFloss });
  } catch (e) {
    next(e);
  }
});

router.route('/:flossId').get(async (req, res, next) => {
  try {
    const foundFloss = await flossService.getFloss(req.params.flossId);
    res.status(200).json({ data: foundFloss });
  } catch (e) {
    next(e);
  }
});

exports.router = router;
