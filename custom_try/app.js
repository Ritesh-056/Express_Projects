const express  = require('express')
const mongoose = require('mongoose')
const con = mongoose.connection
const router =  require('./routes/route');
const port = 5000


const app = express()
 
 
 

 app.use(express.json())

 const url =`mongodb://localhost:users`;
 try {
      mongoose.connect(url, { useNewUrlParser: true },{ useUnifiedTopology: true } );
  } catch (error) {
    handleError(error);
  }






con.on('open',()=>{

    console.log("Connected with database")
})

 
 
 

app.use('/users' , router);


app.listen(port,()=>{

    console.log(`Server running at port number  ==>${port}`)
})