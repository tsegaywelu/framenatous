 const User=require('./model/usermodel')
 const child=require('./model/childmodel');
/*  const express=require('express')
 const app=express() */
 

class usercontroller {
  
    register(req, res) {
      const username=req.body.uname , email=req.body.email ,  password=req.body.password,
      country=req.body.country , telephone=req.body.telephone;
      console.log(User);
      console.table({username,email,password,telephone,country})
       let user = new User({name:username,email,password,telephone,country})
       user.save().then(d=>console.log(d)).catch(e=>console.log(e))
      

       
      
    }
    addchild(req,res){
      const childname=req.body.childname,age=req.body.age,
      childfound=req.body.childfound,statushealthof=req.body.status;
     // console.table({childname,age,childfound,statushealth});
     let adding=new child({childname,age,childfound,statushealth:statushealthof})
     adding.save().then(d=>console.log(d)).catch(e=>console.log(e));

    }

    login(req, res) {
      const password = req.body.password1;
      const name = req.body.name;
    
      User.findOne({ name: name, password: password })
        .then(user => {
          if (user) {
            //console.log('Credentials found in MongoDB');
            // Perform further actions if the credentials are valid
            res.redirect('./home.html');
            //res.status(200).json({ message: 'Login successful' });
          } else {
            console.log('Credentials not found in MongoDB');
            // Perform further actions if the credentials are invalid
            res.status(401).json({ message: 'Invalid credentials' });
          }
        })
        .catch(error => {
          console.error('Error:', error);
          res.status(500).json({ message: 'Internal server error' });
        });
    }
    
    
  
    
  //list of customers or users
    list(req, res) {
      //User.find({}).then(d=>res.json(d)).catch(e=>console.log(e));
      User.find({}).select('').then(d=>res.json(d)).catch(e=>console.log(e));
      
      
    }
    //list of childs
    childs(req,res){
      child.find({}).select().then(d=>res.json(d)).catch(e=>console.log(e));
    }
  }
  
  
  module.exports = {
    usercontroller,
  };