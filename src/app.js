const express = require("express");
const connectDB =  require("./config/database");
const app = express();

app.post("/signup", async (req, res) => {
    console.log("req", req);
})

connectDB().then(() => {
    console.log("Cluster connection established..");
    app.listen(3000, () => {
        console.log("Successfully running on port " + "3000");
    });
}).catch(err => {
    console.log("Error Connecting to cluster", err);
})