'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 300
  }
});

const Todo = mongoose.model('Todo', schema);

module.exports = Todo;
