const  User      = require('./module.js')
const  express   = require('express')

const router = express.Router()




router.post('/' , async (req,res)=>{
   
     try {

         const  user  = await new User(req.body)
         user.save()
         res.json(user)

         
     } catch (error) {
         console.log(error)
     }
})


// // regex
// router.get('/', async(req,res)=>{

//     try {
        
//         const user = await User.find( { email: { $regex: /@gmail.com$/} } )
//         res.json(user)

//     } catch (error) {
//         console.log(error);
//     }

// })


// //conditional operators
// router.get('/', async(req,res)=>{

//     try {
        
//         const user = await User.find( { $and: [ { email: { $regex: /@gmail.com$/} },{ name: { $regex: /ry$/} } ] })
//         res.json(user)

//     } catch (error) {
//         console.log(error);
//     }

// })




//Normal get request for datas

router.get('/' , async (req,res) =>{

    try {
        
         const user = await User.find()
         res.json(user)
    } catch (error) {
        console.log(error)
    }
})



router.delete('/:id' , async (req,res)=>{
    try {

         const user  = await User.findOneAndDelete({_id:req.params.id});
         if(!user){
            return res.status(404).send("User with this doesn't exists in the database.")
         }else{
            res.json(user)
         }    
    } catch (error) {
        console.log(error)
    }
})



router.put('/:id', async (req,res)=>{

    try {
      
         const user = await User.findOneAndUpdate({_id :req.params.id},{$set:req.body},{new:true})
         if(!user){
             return res.status(404).send('User in the database with this id doesnot exits.')
         }else{
            res.json(user)  
         }
        
        
    } catch (error) {
        console.log(error)
    }
})




module.exports = router