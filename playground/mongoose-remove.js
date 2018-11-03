const {ObjectID}=require('mongodb');
const{mongoose}=require('./../server/db/mongoose');
const{Todo}=require('./../server/models/Todo');
var id='5bdc3680f6be32287400697e';

//todo.remove
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove();

// Todo.findOneAndRemove('5bdd308ef7e384fbf4d2a232').then((todo)=>{
//   console.log(todo);
//
// });
Todo.findByIdAndRemove({_id:'5bdd308ef7e384fbf4d2a23'}).then((todo)=>{
  console.log('=todo');
});
