const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersModel = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        contactNo: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Users', UsersModel)