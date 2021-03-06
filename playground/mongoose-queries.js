const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5c1ec34b3656ffcd73ba84c91';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// })

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then(todo => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch(error => console.log(error))

User.findById('5c1fab196971380237dfb919')
  .then(user => {
    if(!user) {
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2))
  }, error => console.log(error))