const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    validate(value){
      if(!["male", "female", "others"].includes(value)){
        throw new Error("Invalid gender");
      }
    }
  },
  photoUrl: {
    type: String,
  },
  about: {
    type: String,
    default: "This is a default about section"
  },
  skills: {
    type: [String],
  }
},{
  timestamps: true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
