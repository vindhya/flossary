const mongoose = require('mongoose');
const express = require('express');

const { URL, PORT } = require('./utils/constants');
const { applyMiddleware } = require('./utils');
const middleware = require('./middleware');

const app = express();
applyMiddleware(middleware, app);
