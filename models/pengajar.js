const mongoose = require("mongoose");
const { Schema } = mongoose;

const pengajarSchema = new Schema({
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
  edukasi: {
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
});

const Pengajar = mongoose.model("Pengajar", pengajarSchema);

module.exports = Pengajar;
