const mongoose = require("mongoose");

const  connectDB = async () => {
    await mongoose.connect("mongodb+srv://taskapp:taskapp@atlascluster.c7qpprs.mongodb.net/devTinder")
}

module.exports = connectDB;