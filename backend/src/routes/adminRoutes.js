const express = require("express");
const { protect, adminOnly } = require("../middleware/auth");

const {
  getAdminStats,
  getAllUsers,
} = require("../controllers/adminController");

const router = express.Router();

router.get("/stats", protect, adminOnly, getAdminStats);
router.get("/users", protect, adminOnly, getAllUsers);

module.exports = router;