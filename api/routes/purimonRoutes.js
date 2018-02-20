'use strict';
module.exports = function(app) {
  var purimon = require('../controllers/purimonController');

  app.route('/validate')
    // .get(purimon.check)
    .post(purimon.validateAnswer);
};