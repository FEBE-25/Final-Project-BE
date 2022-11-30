const mongoose = require('mongoose')
const{ Schema } = mongoose

const paymentSchema = new Schema({
    namaPesanan: String,
    namaUser: String,
    namaPengajar: String,
    tanggal: String,
    jamMulai: String,
    durasi: String, 
    harga: String,
  })

const Payment = mongoose.model('Payment',paymentSchema)

module.exports = Payment