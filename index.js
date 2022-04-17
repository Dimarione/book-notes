const express = require('express');
const path = require('path');

const api = require('./api');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/add-author.html'));
})

app.use('/api', api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
