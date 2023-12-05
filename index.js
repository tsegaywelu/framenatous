const express = require('express');
const app = express();
const connectToDatabase = require('./db');
connectToDatabase();
const routes=require('./routes/route');


//using route as middle ware
app.use(express.json());
app.use('/',routes)
//starting the server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});