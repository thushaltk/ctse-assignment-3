const express = require('express');
const router = express.Router();

//import controller
const ItemsController = require('../controller/items-controller');

router.post("/post", ItemsController.postNewItems);
router.get("/getAll", ItemsController.getAllItems);
router.patch("/update/:id", ItemsController.updateItemById);
router.delete("/delete/:id", ItemsController.deleteItemById);


module.exports = router;