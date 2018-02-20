const isomorphicFetch = require('isomorphic-fetch');

const sortedChildren = [
  {
      "name": "פרשנדתא"
  },
  {
      "name": "דלפון"
  },
  {
      "name": "אספתא"
  },
  {
      "name": "פורתא"
  },
  {
      "name": "אדליא"
  },
  {
      "name": "ארידתא"
  },
  {
      "name": "פרמשתא"
  },
  {
      "name": "אריסי"
  },
  {
      "name": "ארידי"
  },
  {
      "name": "ויזתא"
  }
];

exports.check = function() {
  res.send('success')
  
};

exports.validateAnswer = function(req, res) {
  const familyData = req.body;

  // fetch('http://my-json-server.typicode.com/Avisaac/json_server/blob/master/family')
  // .then(res => {
  //     res.json()
  //   .then(data => {
  //     sortedFamilyData = data

  //     console.log('answer data:', familyData.children)      
  //     console.log('fetch data:', sortedFamilyData.children)      

  //     if(isOrdered(familyData, sortedFamilyData))
  //     res.send(response);
  //   })
  // })

  let result;
  isOrdered(familyData, sortedChildren) ? res.send("key to lock") : res.send("incorrect answer")
};

function isOrdered(answer, correctAnswer) {
  for (let i = 0; i < correctAnswer.length; i++) {
    // console.log(correctAnswer[i].name)
    // console.log(answer.family.children[i].name)
    if(correctAnswer[i].name !== answer.family.children[i].name){
      return false;
    } 
  }
  return true;
}