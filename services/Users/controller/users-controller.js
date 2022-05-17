const UsersModel = require("../model/UsersModel");


addNewUsers = async(req, res) => {
    const userData = req.body;

    if(!userData){
        return res.status(400).json({
            success: false,
            errorMsg: "No data provided"
        })
    }else{
        await new ItemModel(userData).save().then(() => {
            return res.status(200).json({
                success: true,
                message: 'Added New Users'
            })
        }).catch((error) => {
            return res.status(400).json({
                success: false,
                errorMsg: error
            })
        })
    }
}

getAllUsers = async (req, res) => {
    const allUsers = await UsersModel.find();

    if(allUsers){
        return res.status(200).json({
            success: true,
            data: allUsers
        })
    }else{
        return res.status(400).json({
            success: false,
            errorMsg: "Data not available"
        })
    }
}

updateUserById = async (req, res) => {
    const allUsers = await UsersModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        address: req.body.address,
        contactNo: req.body.contactNo,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        username: req.body.username,
        password: req.body.password,
    });

    if(allUsers){
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

deleteUserById = async (req, res) => {
    const allUsers = await UsersModel.findByIdAndRemove(req.params.id);

    if(allUsers){
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
    addNewUsers,
    getAllUsers,
    updateUserById,
    deleteUserById
}