const mongoose=require('mongoose');
const userschema= new mongoose.Schema({
    name:{type:String,
    min:6,
max:15
},
    email:String,
    country:String,
    
    password:String
})
module.exports=User=mongoose.model('User',userschema);