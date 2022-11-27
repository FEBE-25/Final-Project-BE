const express = require("express");
const router = express.Router();

const { verifyAdmin,verifyUser } = require("../controllers/auth.controller")

const {
  getAllPesanLes,
  getPesanLesByID,
  addPesanLes,
  deletePesanLesByID,
  updatePesanLesByID,
  deleteAllPesanLes,
} = require("../controllers/pesanLes.controller");

router.get("/",verifyUser, getAllPesanLes);
router.get("/:id",verifyUser, getPesanLesByID);
router.post("/",verifyUser, addPesanLes);
router.delete("/:id",verifyAdmin, deletePesanLesByID);
router.put("/:id",verifyUser, updatePesanLesByID);
router.delete("/all/:id",verifyAdmin,deleteAllPesanLes)

module.exports = router;
