const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.use(checkPassword) //if you need it for all routes 
// function checkPassword(req, res, next){
//   if(req.query.password === "tylerrulessohard"){
//     next();
//     return;
// }
// res.status(403).json({message: "wrong password fool"})
// }
//or

function checkPassword(req, res, next){
  if(req.query.password !== "tylerrules"){
    res.status(403).json({message: "wrong password fool"})
    return;
  }
  next();
}
function checkAmazingness(req,res,next){
  if(req.body.amazing === true){
    next();
    return;
  }
  res.status(400).json({message: "not the key word"})
 
}

app.get('/data', checkPassword,checkAmazingness, (req, res) => {
    // if(req.query.params !== "tylerrulessohard"){
    //   res.status(403).json({message: "wrong password"})
    //   return;
    // }

  res.json({
    someData: 'pretend this is meaningful data, like URLs to pictures of the simpsons',
  });
});

app.get('/more-data', checkPassword,checkAmazingness, (req, res) => {
  // if(req.query.params !== "tylerrulesohard"){
  //   res.status(403).json({message: "wrong password"})
  //   return;
  // }
  res.json({
    moreData: 'I wish this data were protected!',
  });
});


const port = 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
