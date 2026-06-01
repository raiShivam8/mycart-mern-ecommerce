const express = require("express");
const {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const { protect, adminOnly } = require("../middleware/auth");

const router = express.Router();

router.post("/", protect, createOrder);

router.get("/my-orders", protect, getMyOrders);

router.get("/admin/all", protect, adminOnly, getAllOrders);

router.get("/:id", protect, getOrderById);

router.put("/:id/status", protect, adminOnly, updateOrderStatus);

module.exports = router;