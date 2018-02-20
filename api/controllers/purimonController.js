'use strict';

exports.check = function() {
  console.log('check')
  
};

exports.validatAnswer = function(req, res) {
    var data = req.body;
    console.log(data);
    res.send(data.family.children);    
  };