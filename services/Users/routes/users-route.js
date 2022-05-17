const express = require('express');
const router = express.Router();

//import controller
const UsersController = require('../controller/users-controller');

router.post("/post", UsersController.addNewUsers);
router.get("/getAll", UsersController.getAllUsers);
router.patch("/update/:id", UsersController.updateUserById);
router.delete("/delete/:id", UsersController.deleteUserById);


module.exports = router;