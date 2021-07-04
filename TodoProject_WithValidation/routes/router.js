

//import Router from express
const express = require('express');
const router  = express.Router();

//import Todo todoSchema from model.js file
const Todo   = require('./model.js');
 var todoSchema  =  require('./validation.js') ;





 //todo create
  router.post('/',async (req,res) =>{


             try{


                 const { error } = todoSchema.validate(req.body, { abortEarly: false })
                 if (error) return res.status(400).send(error.details[0].message)

                  const todo = new Todo(req.body)
                  await todo.save()
              
                  console.log(req.body);
                  res.json(todo);

                }catch(ex){
                    console.log(ex);
                }
              
      
        })



  //todo get 
    router.get('/',async (req,res)=>{

      try{
        const todo = await Todo.find()
        res.json(todo);

      }catch(ex){

        console.log(ex);

      }
  })


//todo put
  router.put('/:id',async (req,res) =>{

    try{

      
      // const { error } = todoSchema.validate(req.body, { abortEarly: false })
      // if (error) return res.status(400).send(error.details[0].message)
      
      
      const todo = await Todo.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new: true}, (err,data)=>{


        if(err){

          console.log(err);
        }else{
          res.json(data);
        }
      })
    
      //check whether the todo id exists or not
      if(!todo){
        return res.status(404).send("Todo list with this Id doesn't exists in the database")
      }
  
      res.json(todo)
    }catch(ex){
     
        console.log(ex);     
    }
  
    })

  

  //todo delete

  router.delete('/:id', async (req, res) => {
    console.log(req.params)
    const todo = await Todo.deleteOne({ _id: req.params.id })
    if (!todo){
      return res.status(404).send("User with this Id doesn't exist")  
    }
    res.send(todo)
})

module.exports =  router;
    


