const  User      = require('./module.js')
const  express   = require('express')

 const router = express.Router()


router.post('/' , async (req,res)=>{
   
     try {

         const  user  =   new User(req.body)
         await user.save()
         res.json(user)

         
     } catch (error) {
         console.log(error)
     }
})


router.get('/' , async (req,res) =>{

    try {
        
         const query = await User.find()
         res.json(query)
    } catch (error) {
        console.log(error)
    }
})




module.exports = router