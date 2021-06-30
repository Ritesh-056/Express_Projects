const  express = require('express');
const  mongoose = require('mongoose');
const  path = require('path');




const app = express()


app.use(express.json());
app.use(express.static(path.join(__dirname,'public')) , )



const url ='mongodb://localhost:todos'
mongoose.connect(url, {useNewUrlParser:true})



const con = mongoose.connection

con.on('open' , ()=>{
    console.log('Connected...!')
})



app.get('/',(req,res)=>{
    res.sendFile(index.html)
})


const todoRouter = require('./routes/router')
app.use('/todos', todoRouter)


const port = 4000;
app.listen(port, ()=>{
    console.log(`Server running at port number =>${port} `);
})