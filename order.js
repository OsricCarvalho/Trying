const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    orderNo:
    {
        type: String, 
        required:true
    },

    orderPrice:
    {
        type: Number, 
        min: 1, 
        max: 100, 
        validate:
        {validator: v => v % 2 ==0,
         message: props => `${props.value} not an even number`
        }
    }

})

module.exports =  mongoose.model("order", orderSchema)