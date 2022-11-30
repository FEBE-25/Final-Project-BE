require("dotenv").config();
const midtransClient = require('midtrans-client');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    addPayment: (req, res) => {
       const {namaPesanan,namaUser,namaPengajar, tanggal, jamMulai, durasi, harga} = req.body

       let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction : false,
        serverKey : process.env.SERVER_MIDTRANS_KEY,
    });

    let randomId = uuidv4();
       let parameter = {
        "transaction_details": {
            "order_id": "BilLes-"+ randomId,
            "gross_amount": harga
        },
        "credit_card":{
            "secure" : true
        },
        "customer_details": {
            "namaPesanan": namaPesanan,
            "harga": harga,
            "pengajar":namaPengajar,
            "user": namaUser,
            "tanggal": tanggal,
            "jamMulai":jamMulai,
            "durasi":durasi,
            
        }
    };
    
    snap.createTransaction(parameter)
    .then((transaction)=>{
        // transaction token
        let transactionToken = transaction.token;
        res.json({
            "token": transactionToken,
            "redirectUrl": "https://app.sandbox.midtrans.com/snap/v2/vtweb/"+transactionToken,
        })
    })
      },
}