const express = require("express");

const app = express();

app.use("/hello",  (req, res) => {
    res.send("Hello");
})

app.use((req, res) => {
    res.send("Server created and is running");
});

app.listen(3000, () => {
    console.log("Successfully running on port " + "3000");
});