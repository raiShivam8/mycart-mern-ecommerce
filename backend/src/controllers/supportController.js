const Support = require("../models/Support");

exports.createSupportMessage = async (req, res) => {
  try {
    const support = await Support.create(req.body);

    res.status(201).json({
      message: "Request submitted successfully",
      support,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllSupportMessages = async (req, res) => {
  try {
    const messages = await Support.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSupportStatus = async (req, res) => {
  try {
    const message = await Support.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    message.status = req.body.status || message.status;
    await message.save();

    res.json({
      message: "Status updated",
      support: message,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSupportMessage = async (req, res) => {
  try {
    await Support.findByIdAndDelete(req.params.id);

    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};