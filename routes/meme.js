'use strict';

const express = require('express');
const router = express.Router();

const Meme = require('../models/meme');

router.get('/', (req, res, next) => {
  Meme.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const meme = new Meme(req.body);
  meme.save()
    .then(() => {
      res.json({ message: 'OK' });
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Meme.remove({ _id: id })
    .then(() => {
      res.json({ message: 'deleted!' });
    })
    .catch(next);
});

module.exports = router;
