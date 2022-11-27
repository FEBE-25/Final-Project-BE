const Admin = require("../models/admin")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

const { registerValidation } = require('../config/validation')
const adminKEY = "yessir"


module.exports = {
  getAllAdmin: async (req, res) => {
    try {
        const admin = await Admin.find()
  
      res.json({
        message:"succes get data",
        data: admin
      })
      } catch (error) {
        console.log(error)
      }
    
  },

  getAdminByID: (req, res) => {

  },

  addAdmin: async (req, res) => {
    const { error } = registerValidation(req.body)
    if(error) return res.status(400).json({
        status: res.statusCode,
        message: error.details[0].message
    })

    const emailExist = await Admin.findOne({email: req.body.email})
    if(emailExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Email Sudah terdapat di database !'
    })

    const data = req.body

    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds)
    data.password = hash

    try {
        const admin = new Admin(data)
        admin.save()

        res.json({
         message:"admin data created!!!",
    })
    } catch (error) {
         res.status(400).json({
            status: res.statusCode,
            message: 'Gagal Membuat admin'
        })
    }
    
  },

  deleteAdminByID: async (req, res) => {
    const admin = await Admin.findByIdAndDelete(req.params.id)
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
  },

  updateAdminByID: async (req, res) => {
    var conditions = { _id: req.params.id };

    const admin = await Admin.updateOne(conditions, req.body)
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(200).json({
        doc ,
        message: "admin telah diupdate"
        });
    })
    .catch(err => next(err));
  },
  login: async (req,res) =>{
    const data = req.body

    const admin = await Admin.findOne({email : data.email})

    const cekPass = bcrypt.compareSync(data.password, admin.password)

    const token = jwt.sign(
      {
        id: admin.id,
      },
      adminKEY ,{expiresIn : '60m'}
    );

    if(cekPass){
      res.json({
        message: "Berhasil login",
        token
      })
    } else {
      res.json({
        message: "Ente siapa?"
      })
    }
  },
  
}