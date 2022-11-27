const express = require("express");
const router = express.Router();

const { verifyAdmin,verifyUser } = require("../controllers/auth.controller")

const {
  getAllAdmin,
  getAdminByID,
  addAdmin,
  deleteAdminByID,
  updateAdminByID,
  login,
  
} = require("../controllers/admin.controller");

router.get("/",verifyAdmin, getAllAdmin);
router.get("/:id",verifyAdmin, getAdminByID);
router.post("/register", addAdmin);
router.delete("/:id",verifyAdmin, deleteAdminByID);
router.put("/update/:id",verifyAdmin, updateAdminByID);
router.post("/login", login);

module.exports = router;
