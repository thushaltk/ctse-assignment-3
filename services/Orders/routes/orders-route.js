const express = require('express');
const router = express.Router();

//import controller
const OrdersController = require('../controller/orders-controller');

router.post("/post", OrdersController.postNewOrders);
router.get("/getAll", OrdersController.getAllOrders);
router.patch("/update/:id", OrdersController.updateOrderById);
router.delete("/delete/:id", OrdersController.deleteOrderById);


module.exports = router;