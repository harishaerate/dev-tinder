const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send("Get User Route");
});

app.post("/user", (req, res) => {
    console.log("body", req.params);
    res.send("Post User Route");
});


//This will match with all type of http requests. So we need to specifically mention the request type while creating the routes
app.use("/", (req, res) => {
    res.send("/ ROute Introduced");
})

app.listen(3000, () => {
    console.log("Successfully running on port " + "3000");
});