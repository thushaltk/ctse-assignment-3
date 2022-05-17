const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartItemModel = new Schema(
    {
        itemList: [
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
        ],
        total: {
            type: Number,
            required: true
        },
        noOfItems: {
            type: Number,
            required: true
        }
    }
)

module.exports = mongoose.model('Cart', CartItemModel)