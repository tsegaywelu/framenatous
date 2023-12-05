const mongoose=require('mongoose');
const childchema= new mongoose.Schema({
    childname:String,
    age:Number,
    childfound:String,
    
    statushealth:String
})
module.exports=child=mongoose.model('child',childchema);