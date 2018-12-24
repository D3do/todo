const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

Todo.findOneAndRemove({ _id: '5c2098606971380237dfb91a'}).then(todo => {
  
})

Todo.findByIdAndRemove('5c2098606971380237dfb91a').then(todo => {
  console.log('todo');
});
