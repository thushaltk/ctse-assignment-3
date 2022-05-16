const ItemModel = require("../model/ItemsModel");


postNewItems = async(req, res) => {
    const itemData = req.body;

    if(!itemData){
        return res.status(400).json({
            success: false,
            errorMsg: "No data provided"
        })
    }else{
        await new ItemModel(itemData).save().then(() => {
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

getAllItems = async (req, res) => {
    const allItems = await ItemModel.find();

    if(allItems){
        return res.status(200).json({
            success: true,
            data: allItems
        })
    }else{
        return res.status(400).json({
            success: false,
            errorMsg: "Data not available"
        })
    }
}

updateItemById = async (req, res) => {
    const allItems = await ItemModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        additionalDetails: req.body.additionalDetails,
        price: req.body.price,
        dateOfManufacture: req.body.dateOfManufacture
    });

    if(allItems){
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

deleteItemById = async (req, res) => {
    const allItems = await ItemModel.findByIdAndRemove(req.params.id);

    if(allItems){
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
    postNewItems,
    getAllItems,
    updateItemById,
    deleteItemById
}