var express=require('express');
var bodyParser=require('body-parser');



var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/Todo.js');
var {User}=require('./models/User.js');


var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo =new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});



app.listen(3000,()=>{

  console.log('Server started on port 3000');
});

module.exports={
  app:app
};
 // var newTodo =new Todo({text:'Cook dinner'});
 // newTodo.save().then((doc)=>{
 //   console.log('Saved Todo',doc);
 // },(e)=>{
 //   console.log('Unable to save Todo');
 // })




 // var OtherTodo=new Todo({
 //   text:'        Edit the video          '
 // });
 // OtherTodo.save().then((doc)=>{
 //    console.log('Saved Todo ',JSON.stringify(doc,undefined,2));
 // },(e)=>{
 //   console.log('Unable to save the Todo ',e);
 // });


//
//  var newuser=new User({
//    text:'example@gmail.com'
//  });
// newuser.save().then((doc)=>{
//   console.log('SAVED USER',doc);
// },(e)=>{
//   console.log('Unable to save the user');
// });
// //save new Something
