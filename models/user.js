const mongoose = require('mongoose')
const{ Schema } = mongoose

const userSchema = new Schema({
    name: String,
    email: {
      type: String,
      required: true
    },
    password: String,
    nohp: Number,
    jenjangpendidikan: String,
    alamat: String,
    asalskolah: String,
    
  })

const User = mongoose.model('User',userSchema)

module.exports = User