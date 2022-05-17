const CartItemModel = require("../model/CartModel");


postNewCartItems = async(req, res) => {
    const cartItemData = req.body;

    if(!cartItemData){
        return res.status(400).json({
            success: false,
            errorMsg: "No data provided"
        })
    }else{
        await new CartItemModel(cartItemData).save().then(() => {
            return res.status(200).json({
                success: true,
                message: 'Added New Items'
            })
        }).catch((error) => {
            return res.status(400).json({
                success: false,
                errorMsg: error
            })
        })
    }
}

getAllCartItems = async (req, res) => {
    const allCartItems = await CartItemModel.find();

    if(allCartItems){
        return res.status(200).json({
            success: true,
            data: allCartItems
        })
    }else{
        return res.status(400).json({
            success: false,
            errorMsg: "Data not available"
        })
    }
}

updateCartItemById = async (req, res) => {
    const allCartItems = await CartItemModel.findByIdAndUpdate(req.params.id, {
        itemList: req.body.itemList,
        total: req.body.total,
        noOfItems: req.body.noOfItems
    });

    if(allCartItems){
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

deleteCartItemById = async (req, res) => {
    const allCartItems = await CartItemModel.findByIdAndRemove(req.params.id);

    if(allCartItems){
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
    postNewCartItems,
    getAllCartItems,
    updateCartItemById,
    deleteCartItemById
}