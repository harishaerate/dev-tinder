const express = require("express");
const connectDB = require("./config/database");
const app = express();
const userModel = require("./models/user");

app.use(express.json());

//Store user details to DB
app.post("/signup", async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res
      .status(200)
      .send({ statusText: "User created successfully.", data: user });
  } catch(err) {
    res.status(500).send({ statusText: "Unable to create user data.", data: err });
  }
});

//Get User with specific details
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try{
    let users = await userModel.find({emailId: userEmail});
    console.log("user", users);
    if(users && users.length){
      res
    .status(200)
    .send({ statusText: "Found User successfully.", "response": users});
    } 
    else res.status(404).send({ statusText: "User not found.", "response": users});
    
  }catch{
    res.status(500).send({ statusText: "Something went wrong." });
  }
})

//Get all Feeds API
app.get("/feed", async (req, res) => {
  try{
    const users = await userModel.find({});
    console.log("users from feed api", users);
    if(users && users.length){
      res
    .status(200)
    .send({ statusText: "Found User successfully.", "response": users});
    }
    else res.status(404).send({ statusText: "User not found.", "response": users});
  }catch{
    res.status(500).send({ statusText: "Something went wrong." });
  }
})

//API to delete a user based on ID
// app.delete("/user", async (req, res) => {
//   const userId = req.body.userId;
//   try{
//     const user = await userModel.findByIdAndDelete({})
//   }catch{

//   }
// })

//Update user API 
app.patch("/user", (req, res) => {
  
})

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