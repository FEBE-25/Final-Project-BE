const mongoose = require("mongoose");
const { Schema } = mongoose;

const pengajarSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  noHp: String,
  nama: {
    type: String,
    required: true,
  },
  foto: String,
  edukasi: [
    {
      lokasi: {
        type: String,
        required: true,
      },
      jurusan: {
        type: String,
        required: true,
      },
    },
  ],
  alamat: {
    kabupatenKota: {
      type: String,
      required: true,
    },
    provinsi: {
      type: String,
      required: true,
    },
  },
  bidangAjar: [String],
  deskripsi: {
    type: String,
    required: true,
  },
  pengalaman: [
    {
      posisi: String,
      lokasi: String,
      mulai: String,
      selesai: String,
      deskripsi: String,
    },
  ],
  review: [
    {
      bintang: Number,
      nama: String,
      deskripsi: String,
    },
  ],
  overall: {
    bintang: Number,
    jumlah: Number,
  },
});

const Pengajar = mongoose.model("Pengajar", pengajarSchema);

module.exports = Pengajar;
