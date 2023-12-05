const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());

// Import your controller
const { usercontroller } = require('../controller/usercontroller');


// Create an instance of the controller
const userControllerInstance = new usercontroller();

// Define your routes
router.post('/regist', userControllerInstance.register);
//router.post('/login', userControllerInstance.login);
//router.put('/update', userControllerInstance.update);
router.get('/list', userControllerInstance.list);
router.post('/addchild',userControllerInstance.addchild);
router.get('/childlist',userControllerInstance.childs)
router.post('/loginnow',userControllerInstance.login)
// Export the router module
module.exports = router;