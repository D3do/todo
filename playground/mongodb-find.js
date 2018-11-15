// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.error('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed: false}).toArray()
  //   .then(docs => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, err => {
  //     console.log('Unable to fetch Todos', err);
  //   });

  // db.collection('Todos').find().count()
  //   .then(count => {
  //     console.log(`Todos count: ${count}`);
  //     console.log(JSON.stringify(count, undefined, 2));
  //   }, err => {
  //     console.log('Unable to fetch Todos', err);
  //   });

  db.collection('Users').find({name: 'Karol'}).toArray()
    .then(docs => {
      console.log(`Users count: ${docs}`);
      console.log(JSON.stringify(docs, undefined, 2));
    }).catch(err => {
      console.log('Unable to fetch Users', err);
    });

  // client.close();
});
