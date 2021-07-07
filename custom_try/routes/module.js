

const mongoose = require('mongoose')




  const  userSchema  = mongoose.Schema({

       name : {type: String },
       address : String, 
       gender : Boolean,
       phoneNumber : Number,
       email:String

  });



  const User  = mongoose.model('User', userSchema)


  module.exports = User