const express = require("express");
const router = express.Router();

const { verifyAdmin, verifyUser } = require("../controllers/auth.controller");

const {
  getAllPengajar,
  getPengajarByID,
  addPengajar,
  deletePengajarByID,
  updatePengajarByID,
  deleteAllPengajar,
} = require("../controllers/pengajar.controller");

router.get("/", getAllPengajar);
router.get("/:id", getPengajarByID);
router.post("/", addPengajar);
router.delete("/:id", deletePengajarByID);
router.put("/:id", updatePengajarByID);
router.delete("/all/:id", deleteAllPengajar);

module.exports = router;
