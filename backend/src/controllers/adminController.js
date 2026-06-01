const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");
const Support = require("../models/Support");

exports.getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();
    const pendingOrders = await Order.countDocuments({ orderStatus: "Pending" });
    const deliveredOrders = await Order.countDocuments({ orderStatus: "Delivered" });
    const supportMessages = await Support.countDocuments();
    const pendingSupport = await Support.countDocuments({ status: "pending" });

    const orders = await Order.find();

    const totalRevenue = orders.reduce((sum, order) => {
      return sum + Number(order.totalAmount || order.total || 0);
    }, 0);

    const recentOrders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 })
      .limit(5);

    const latestUsers = await User.find()
      .select("-password")
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalUsers,
      totalProducts,
      totalOrders,
      pendingOrders,
      deliveredOrders,
      supportMessages,
      pendingSupport,
      totalRevenue,
      recentOrders,
      latestUsers,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};