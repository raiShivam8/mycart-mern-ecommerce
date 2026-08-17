import { products } from "./products";

export const sampleProducts = products.map((item) => ({
  ...item,
  _id: item._id || item.id,
}));
