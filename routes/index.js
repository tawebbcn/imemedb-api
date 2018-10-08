'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const data = {
    name: 'iMemeDB API',
    version: 'v1.0'
  };
  res.status(404).json(data);
});

module.exports = router;
