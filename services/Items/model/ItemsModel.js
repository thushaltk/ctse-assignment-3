const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemModel = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        additionalDetails: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        dateOfManufacture: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Item', ItemModel)