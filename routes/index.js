const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const pesanLesRouter = require("./pesanLes.router");
// const authRouter = require("./auth.router");
const pengajarRouter = require("./pengajar.router");
const adminRouter = require("./admin.router");
const paymentRouter = require("./payment.router")

router.use("/user", userRouter);
router.use("/pesanLes", pesanLesRouter);
// router.use("/auth", authRouter);
router.use("/pengajar", pengajarRouter);
router.use("/admin", adminRouter);
router.use("/payment",paymentRouter)

module.exports = router;
