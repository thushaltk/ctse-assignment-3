const express = require('express');
const router = express.Router();

//import controller
const CartController = require('../controller/cart-controller');

router.post("/post", CartController.postNewCartItems);
router.get("/getAll", CartController.getAllCartItems);
router.patch("/update/:id", CartController.updateCartItemById);
router.delete("/delete/:id", CartController.deleteCartItemById);


module.exports = router;