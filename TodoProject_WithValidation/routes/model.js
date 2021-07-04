
//import mongoose from the dependencies mongoose
const { string } = require('joi');
var  mongoose  = require('mongoose');



//schema  for todo illustration

//todo
// schema
// title
// description
// state 
// backlog
// start
// completed



   //schema of todo 
  const todoSchema = new mongoose.Schema({
       
       title: {type:String , required: true},
       description: { type : String ,required : true},
       state : String,
       createdAt: {
               type: Date,
               default: Date.now()
           }
     
       
  })
  
  
  //assigning the todo model or schema to the variable Todo (as a class concepts in OOP paradigms)
const Todo  = mongoose.model('Todo' , todoSchema)
   
   
module.exports = Todo



