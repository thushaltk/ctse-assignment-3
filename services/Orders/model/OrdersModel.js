const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderModel = new Schema(
    {
        orderName: {
            type: String,
            required: true
        },
        orderDescription: {
            type: String,
            required: true
        },
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
        deliveryAddress: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Order', OrderModel)