const tokenService = require('../utils/token.service');

module.exports = async (req, res, next) => {
  const headers = req.headers;
  // One thing we could do to improve readability is use returns to decrease nesting, like so:
  if (!headers) {
    return next(new Error('Invalid Request'));
  }

  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return next(new Error('Invalid Request'));
  }

  try {
    const [prefix, token] = authHeader.split(' ');
    const decoded = await tokenService.verifyToken(token);
    if (decoded) {
      req.token = decoded;
      return next();
    }

    // next(new HTTP401Error()); // this error is coming from another utility
    next(new Error('You are not authorized'));
  } catch (e) {
    console.error(e);
  }
};
