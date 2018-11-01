//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err)
  {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp')
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bdafba3f7e384fbf4d27ad0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bdaa16f6f34c502c4933acc')
  }, {
    $set: {
      name: 'Sudhanshu Semwal'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //client.close();


});
