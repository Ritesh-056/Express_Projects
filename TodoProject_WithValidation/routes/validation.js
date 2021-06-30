
// // // joi is used for validation 
 var Joi = require('joi')


    const todoSchema = Joi.object({

        title:Joi.string().min(20).required(),
        description:Joi.string().min(50).required(),
        state :Joi.string()
    }) 


  module.exports = todoSchema;
