'use strict';

const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', (req, res, next) => {
  Todo.find()
    .then((todos) => {
      console.log(todos);
      res.render('home', { todos });
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/add', (req, res, next) => {
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

router.post('/delete', (req, res, next) => {
  const { nameInput } = req.body;
  console.log('name: ' + nameInput);
  Todo.findOneAndDelete({ name: nameInput })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/mark', (req, res, next) => {
  const { nameInput } = req.body;
  console.log(nameInput);
  Todo.findOneAndUpdate({ name: nameInput }, { done: true })
    .then(() => {
      res.redirect(`/`);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
