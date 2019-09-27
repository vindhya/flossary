const mongoose = require('mongoose');
const express = require('express');

const { URL, PORT } = require('./utils/constants');
const { applyMiddleware } = require('./utils');
const middleware = require('./middleware');
const { router: userRouter } = require('./routes/users/user.routes');

const app = express();
applyMiddleware(middleware, app);

app.use('/api/users', userRouter);

mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
