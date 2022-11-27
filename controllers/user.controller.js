const bcrypt = require('bcrypt');
const User = require("../models/user")
const jwt = require("jsonwebtoken");
const loginKEY = "anotherone"

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({}, "-__v -password")

      res.json({
        message: "success get data user",
        data: users
      })
    } catch (error) {
      console.log(error);
    }
  },

  getUserByID: (req, res) => {

  },

  addUser: (req, res) => {
    const data = req.body

    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds);
    data.password = hash

    const user = new User(data)

    // console.log(user)
    user.save()

    res.json({
      message: "data has been created!!",
    })
  },

  deleteUserByID: (req, res) => {
 
  },

  updateUserByID: (req, res) => {

  },
  login: async (req,res) =>{
    const data = req.body
    const user = await User.findOne({email : data.email})
    const cekPass = bcrypt.compareSync(data.password, user.password)

    const token = jwt.sign(
      {
        id: user.id,
      },
      loginKEY ,{expiresIn : '60m'}
    );

    if(cekPass){
      res.json({
        message: "Login Succesful",
        token
      })
    } else {
      res.json({
        message: "Something wrong with your brain"
      })
    }
  },
  
}