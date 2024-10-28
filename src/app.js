const express = require("express");
const connectDB = require("./config/database");
const app = express();
const userModel = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log("req", req.body);

  const user = new userModel(req.body);

  try {
    await user.save();
    res
      .status(200)
      .send({ statusText: "User created successfully.", data: user });
  } catch {
    res.status(500).send({ statusText: "Unable to create user data." });
  }
});

connectDB()
  .then(() => {
    console.log("Cluster connection established..");
    app.listen(3000, () => {
      console.log("Successfully running on port " + "3000");
    });
  })
  .catch((err) => {
    console.log("Error Connecting to cluster", err);
  });