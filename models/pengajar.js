const mongoose = require("mongoose");
const { Schema } = mongoose;

const pengajarSchema = new Schema({
  email: String,
  noHp: String,
  nama: {
    type: String,
    required: true,
  },
  pendidikan: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  bidangAjar: {
    type: String,
    required: true,
  },
  avatar: String,
  pengalaman: String,
  ulasan: String,
  overall:String,
});

const Pengajar = mongoose.model("Pengajar", pengajarSchema);

module.exports = Pengajar;
