const  express = require('express');
const  mongoose = require('mongoose');
const  path = require('path');



//this is the app for running 
const app = express()


//middleware for the express app
app.use(express.json());


//this is used to connect the backend with the front-end index.html file located inside the public folder.
app.use(express.static(path.join(__dirname,'public')) , )



//checking for the database connections and printing the connections details
const url ='mongodb://localhost:todos'
mongoose.connect(url, {useNewUrlParser:true})
.then((result)=>{ console.log("Connected to database...!")})
.catch((ex) => console.log("Error connecting to database ...!"))


//Now if the app get the file enlisted in the url of the app then it send the file content to the localhost URL.
app.get('/',(req,res)=>{
    res.sendFile(index.html)
})


//these defines whether the app will get or post the properties in a app.
const todoRouter = require('./routes/router')
app.use('/todos', todoRouter)



//declaring the port and send the port running message to the app to work in a port address as a URL.
const port = 4000;
app.listen(port, ()=>{
    console.log(`Server running at port number =>${port} `);
})