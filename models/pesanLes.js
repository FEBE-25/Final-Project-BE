const mongoose = require('mongoose');
const { Schema } = mongoose

const pesanLesSchema = new Schema({
  teacherId : {
    type: mongoose.ObjectId,
    ref: "Pengajar"},
  userId : {
    type: mongoose.ObjectId,
    ref: "User"
  },
  biaya : String,
  jenjangMateri : String,
  topikMateri : String,
  detilTopik : String,
  tanggal : String,
  jamMulai : String,
  durasi : String,
  modeBelajar : String,
  alamat : String,
  maps : String,
  tambahan : String,
})

const PesanLes = mongoose.model("PesanLes", pesanLesSchema)

module.exports = PesanLes