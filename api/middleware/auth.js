const tokenService = require('../utils/token.service');

module.exports = async (req, res, next) => {
  const headers = req.body.headers;

  if (!headers) {
    console.log('no headers');
    next(new Error('Invalid Request'));
  } else {
    const authHeader = req.body.headers['Authorization'];
    console.log('headers but no auth header');

    if (!authHeader) {
      next(new Error('Invalid Request'));
    } else {
      try {
        const [prefix, token] = authHeader.split(' ');
        const decoded = await tokenService.verifyToken(token);
        if (decoded) {
          req.token = decoded;
          next();
        } else {
          // next(new HTTP401Error()); // this error is coming from another utility
          next(new Error('You are not authorized'));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
};
