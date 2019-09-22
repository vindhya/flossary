const bodyParser = require('body-parser');

exports.handleBodyRequestParsing = router => {
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());
};
