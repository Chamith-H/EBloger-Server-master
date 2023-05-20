const mongoose = require("mongoose");

const userSchema = {
    ID:Number,
    name:String,
    email:String,
}

const mongoCollection = mongoose.model("users", userSchema)

module.exports = mongoCollection;