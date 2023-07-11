const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: String,
    userAddress: String
})

module.exports = mongoose.model("user", userSchema)