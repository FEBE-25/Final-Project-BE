const express = require("express");
const router = express.Router();

const { verifyAdmin,verifyUser } = require("../controllers/auth.controller")

const {
  
  addPayment,
  
} = require("../controllers/payment.controller");


router.post("/", addPayment);


module.exports = router;
