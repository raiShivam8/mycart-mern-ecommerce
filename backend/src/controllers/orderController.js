const Order = require("../models/Order");
const sendMail = require("../utils/sendMail");

exports.createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod, totalAmount } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Order items are required" });
    }

    if (!shippingAddress?.name || !shippingAddress?.phone || !shippingAddress?.address || !shippingAddress?.city || !shippingAddress?.pincode) {
      return res.status(400).json({ message: "Complete shipping address is required" });
    }

    const order = await Order.create({
      user: req.user._id,
      items,
      shippingAddress,
      paymentMethod,
      paymentStatus: paymentMethod === "COD" ? "Pending" : "Paid",
      orderStatus: "Pending",
      totalAmount,
    });

    const populatedOrder = await Order.findById(order._id).populate("user");

    // Email should not block order placement. If email config fails on Render,
    // the order will still be created and frontend will get success response.
    try {
      const productList = items
        .map(
          (item) =>
            `<li>${item.title} - Qty: ${item.qty} - $${item.price}</li>`
        )
        .join("");

      const fullAddress = `
        ${shippingAddress.address || ""},
        ${shippingAddress.city || ""},
        ${shippingAddress.pincode || ""}
      `;

      if (populatedOrder?.user?.email) {
        await sendMail(
          populatedOrder.user.email,
          "Order Placed Successfully - MyCart",
          `
            <div style="font-family:Arial,sans-serif;padding:20px">
              <h2>Order Placed Successfully</h2>
              <p>Hello ${populatedOrder.user.name},</p>
              <p>Your order has been placed successfully.</p>
              <h3>Customer Details</h3>
              <p><b>Name:</b> ${shippingAddress.name || populatedOrder.user.name}</p>
              <p><b>Email:</b> ${populatedOrder.user.email}</p>
              <p><b>Phone:</b> ${shippingAddress.phone || "Not provided"}</p>
              <p><b>Address:</b> ${fullAddress}</p>
              <h3>Order Details</h3>
              <p><b>Order ID:</b> ${order._id}</p>
              <p><b>Total Amount:</b> $${totalAmount}</p>
              <p><b>Payment Method:</b> ${paymentMethod}</p>
              <p><b>Status:</b> Pending</p>
              <h3>Products</h3>
              <ul>${productList}</ul>
              <p>Thank you for shopping with MyCart.</p>
            </div>
          `
        );
      }

      if (process.env.ADMIN_EMAIL) {
        await sendMail(
          process.env.ADMIN_EMAIL,
          "New Order Received - MyCart",
          `
            <div style="font-family:Arial,sans-serif;padding:20px">
              <h2>New Order Received</h2>
              <h3>Customer Details</h3>
              <p><b>Name:</b> ${shippingAddress.name || populatedOrder.user.name}</p>
              <p><b>Email:</b> ${populatedOrder.user.email}</p>
              <p><b>Phone:</b> ${shippingAddress.phone || "Not provided"}</p>
              <p><b>Address:</b> ${fullAddress}</p>
              <h3>Order Details</h3>
              <p><b>Order ID:</b> ${order._id}</p>
              <p><b>Total:</b> $${totalAmount}</p>
              <p><b>Payment:</b> ${paymentMethod}</p>
              <h3>Products</h3>
              <ul>${productList}</ul>
            </div>
          `
        );
      }
    } catch (mailErr) {
      console.log("Order email failed:", mailErr.message);
    }

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    const oldStatus = order.orderStatus;

    order.orderStatus = orderStatus;

    await order.save();

    if (orderStatus === "Delivered" && oldStatus !== "Delivered") {
      const productList = order.items
        .map(
          (item) =>
            `<li>${item.title} - Qty: ${item.qty} - $${item.price}</li>`
        )
        .join("");

      await sendMail(
        order.user.email,
        "Your Order Has Been Delivered - MyCart",
        `
          <div style="font-family:Arial,sans-serif;padding:20px">
            <h2>Your Order Has Been Delivered</h2>

            <p>Hello ${order.user.name},</p>

            <p>Your order has been delivered successfully.</p>

            <p><b>Order ID:</b> ${order._id}</p>
            <p><b>Total Amount:</b> $${order.totalAmount}</p>

            <h3>Delivered Products</h3>
            <ul>
              ${productList}
            </ul>

            <p>Thank you for shopping with MyCart ❤️</p>
          </div>
        `
      );
    }

    res.json({
      message: "Order status updated",
      order,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};