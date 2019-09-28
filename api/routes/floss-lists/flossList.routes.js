const express = require('express');
const flossListService = require('./flossList.service');

const router = express.Router();

router
  .route('/flossListId')
  .get()
  .post();

exports.router = router;
