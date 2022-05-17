const OrderModel = require("../model/OrdersModel");


postNewOrders = async(req, res) => {
    const orderData = req.body;

    if(!orderData){
        return res.status(400).json({
            success: false,
            errorMsg: "No data provided"
        })
    }else{
        await new OrderModel(orderData).save().then(() => {
            return res.status(200).json({
                success: true,
                message: 'Added New Order'
            })
        }).catch((error) => {
            return res.status(400).json({
                success: false,
                errorMsg: error
            })
        })
    }
}

getAllOrders = async (req, res) => {
    const allOrders = await OrderModel.find();

    if(allOrders){
        return res.status(200).json({
            success: true,
            data: allOrders
        })
    }else{
        return res.status(400).json({
            success: false,
            errorMsg: "Data not available"
        })
    }
}

updateOrderById = async (req, res) => {
    const allOrders = await OrderModel.findByIdAndUpdate(req.params.id, {
        orderName: req.body.orderName,
        orderDescription: req.body.orderDescription,
        itemList: req.body.itemList,
        total: req.body.total,
        deliveryAddress: req.body.deliveryAddress
    });

    if(allOrders){
        return res.status(200).json({
            success: true,
            data: "Updated successfully"
        })
    }else{
        return res.status(400).json({
            success: false,
            errorMsg: "Data not available"
        })
    }
}

deleteOrderById = async (req, res) => {
    const allOrders = await OrderModel.findByIdAndRemove(req.params.id);

    if(allOrders){
        return res.status(200).json({
            success: true,
            data: "Deleted successfully"
        })
    }else{
        return res.status(400).json({
            success: false,
            errorMsg: "Data not available"
        })
    }
}

module.exports = {
    postNewOrders,
    getAllOrders,
    updateOrderById,
    deleteOrderById
}