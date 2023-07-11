//Importing necessary files
const mongoose = require("mongoose")
const user = require ("./user.js")
const order = require ("./order.js")

//Connecting to the database 
mongoose.connect("mongodb://127.0.0.1:27017/nationwide")
// .then( () => {
//     console.log("CONNECTED")  
// }).catch(err => {
//     console.log("There was an error.")
//     console.log(err.message)
// })

//Creating new users using async function

async function printUsers() 
{
    const User = await user.find({userName: "Osric"})

    // const User = await user.create({userName: "Osric", userAddress: "London"} )
    if (User == " "){

        console.log("User not found")
    }
    else {
        console.log(User)
    }
}
printUsers()




// async function printOrders(){

//     const Order = await order.create({orderNo: "Asda123", orderPrice: "52"})
//     console.log(Order)
// }

// printUsers()
// printOrders()