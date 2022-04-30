'use strict';

const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', (req, res, next) => {
  Todo.find()
    .then((todos) => {
      res.render('home', { todos });
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const { todo } = req.body;
  console.log(todo);
  Todo.create({
    name: todo
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
