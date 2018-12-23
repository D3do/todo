const express = require('express');
const { ObjectID } = require('mongodb');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save()
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      res.status(400).send(err)
    });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (error) => {
    res.status(400).send(error);
  })
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then(todo => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch(err => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};