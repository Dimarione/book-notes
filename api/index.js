const express = require('express');

const authors = require('./authors');

const router = express.Router();

router.use('/authors', authors);

module.exports = router;
