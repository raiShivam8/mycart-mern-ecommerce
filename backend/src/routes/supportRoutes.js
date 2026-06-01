const express = require("express");

const {
  createSupportMessage,
  getAllSupportMessages,
  updateSupportStatus,
  deleteSupportMessage,
} = require("../controllers/supportController");

const { protect, adminOnly } = require("../middleware/auth");

const router = express.Router();

router.post("/", createSupportMessage);

router.get("/", protect, adminOnly, getAllSupportMessages);

router.put("/:id", protect, adminOnly, updateSupportStatus);

router.delete("/:id", protect, adminOnly, deleteSupportMessage);

module.exports = router;