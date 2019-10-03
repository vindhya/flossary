const bodyParser = require('body-parser');
const passport = require('passport');

exports.handleBodyRequestParsing = router => {
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());
};

exports.initializePassport = router => {
  router.use(passport.initialize());
};
