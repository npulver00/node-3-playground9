const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.get('/data', (req, res) => {
  res.json({
    someData: 'pretend this is meaningful data, like URLs to pictures of the simpsons',
  });
});

app.get('/more-data', (req, res) => {
  res.json({
    moreData: 'I wish this data were protected!',
  });
});

const port = 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
