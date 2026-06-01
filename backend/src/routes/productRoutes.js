const express = require("express");

const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect, adminOnly } = require("../middleware/auth");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getSingleProduct);

router.post(
  "/",
  protect,
  adminOnly,
  addProduct
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateProduct
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProduct
);

module.exports = router;