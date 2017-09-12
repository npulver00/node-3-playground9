const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
