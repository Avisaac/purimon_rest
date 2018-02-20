'use strict';
module.exports = function(app) {
  var purimon = require('../controllers/purimonController');

  app.route('/test')
    .get(purimon.check)
    .post(purimon.validatAnswer);
};