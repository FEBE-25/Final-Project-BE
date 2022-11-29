require("dotenv").config();
const midtransClient = require('midtrans-client');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    addPayment: (req, res) => {
       const {nama, barang, harga} = req.body

       let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction : false,
        serverKey : process.env.SERVER_MIDTRANS_KEY,
    });

    let randomId = uuidv4();
       let parameter = {
        "transaction_details": {
            "order_id": "YOUR-ORDERID-"+ randomId,
            "gross_amount": harga
        },
        "credit_card":{
            "secure" : true
        },
        "customer_details": {
            "first_name": nama,
            "barang": barang,
            "harga": harga,
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