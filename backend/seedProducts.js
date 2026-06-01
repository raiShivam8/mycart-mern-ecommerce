const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./src/models/Product");

const products = [

  // ================= BOOKS =================

  {
    title: "The Great Gatsby",
    category: "books",
    image: "/images/The Great Gatsby.png",
    price: 15,
    info: "A classic novel of the Jazz Age, portraying the decadence of the 1920s.",
    stock: 20,
  },

  {
    title: "1984",
    category: "books",
    image: "/images/1984.png",
    price: 12,
    info: "George Orwell's dystopian novel about a totalitarian regime.",
    stock: 25,
  },

  {
    title: "To Kill a Mockingbird",
    category: "books",
    image: "/images/To Kill a Mockingbird.png",
    price: 10,
    info: "A profound novel about racial injustice in the Deep South.",
    stock: 15,
  },

  {
    title: "Pride and Prejudice",
    category: "books",
    image: "/images/Pride and Prejudice.png",
    price: 9,
    info: "Jane Austen's romantic novel about manners and marriage.",
    stock: 14,
  },

  {
    title: "The Catcher in the Rye",
    category: "books",
    image: "/images/The Catcher in the Rye.png",
    price: 11,
    info: "A novel about teenage rebellion and angst.",
    stock: 10,
  },

  {
    title: "The Hobbit",
    category: "books",
    image: "/images/The Hobbit.png",
    price: 14,
    info: "J.R.R. Tolkien's fantasy novel about Bilbo Baggins.",
    stock: 16,
  },

  {
    title: "Moby-Dick",
    category: "books",
    image: "/images/Moby-Dick.png",
    price: 18,
    info: "Herman Melville's epic tale of obsession and the sea.",
    stock: 9,
  },

  {
    title: "War and Peace",
    category: "books",
    image: "/images/War and Peace.png",
    price: 20,
    info: "Leo Tolstoy's grand narrative of Russian society.",
    stock: 7,
  },

  // ================= LAPTOPS =================

  {
    title: "Macbook Pro 13",
    category: "laptop",
    image: "/images/Macbook pro 13.png",
    price: 1099,
    info: "256GB, 8 core GPU, 8GB RAM.",
    stock: 8,
  },

  {
    title: "MacBook Pro 16",
    category: "laptop",
    image: "/images/MacBook Pro 16.png",
    price: 2399,
    info: "Powerful laptop with stunning Retina display.",
    stock: 5,
  },

  {
    title: "HP Spectre x360",
    category: "laptop",
    image: "/images/HP Spectre x360.png",
    price: 1599,
    info: "Versatile 2-in-1 laptop with sleek design.",
    stock: 7,
  },

  {
    title: "Dell XPS 15",
    category: "laptop",
    image: "/images/Dell XPS 15.png",
    price: 1899,
    info: "Premium laptop with InfinityEdge display.",
    stock: 4,
  },

  {
    title: "Laptop sleeve MacBook",
    category: "laptop",
    image: "/images/Laptop sleeve MacBook.png",
    price: 59,
    info: "Organic cotton, fairtrade certified.",
    stock: 30,
  },

  {
    title: "Lenovo ThinkPad X1 Carbon",
    category: "laptop",
    image: "/images/Lenovo ThinkPad X1 Carbon.png",
    price: 1499,
    info: "Business laptop with durable build.",
    stock: 6,
  },

  {
    title: "Microsoft Surface Laptop",
    category: "laptop",
    image: "/images/Microsoft Surface Laptop 4.png",
    price: 1299,
    info: "Elegant laptop with excellent battery life.",
    stock: 8,
  },

  {
    title: "Asus ZenBook 14",
    category: "laptop",
    image: "/images/Asus ZenBook 14.png",
    price: 1099,
    info: "Compact laptop with NanoEdge display.",
    stock: 11,
  },

  {
    title: "Acer Swift 5",
    category: "laptop",
    image: "/images/Acer Swift 5.png",
    price: 999,
    info: "Ultralight laptop with powerful performance.",
    stock: 12,
  },

  {
    title: "Razer Blade 15",
    category: "laptop",
    image: "/images/Razer Blade 15.png",
    price: 2199,
    info: "Gaming laptop with high-refresh rate display.",
    stock: 4,
  },

  // ================= MOBILES =================

  {
    title: "Ipad Mini",
    category: "mobile",
    image: "/images/Ipad Mini.png",
    price: 539,
    info: "Compact size and 5 colors available.",
    stock: 13,
  },

  {
    title: "iPhone 13 Pro",
    category: "mobile",
    image: "/images/iPhone 13 Pro.png",
    price: 1099,
    info: "Flagship smartphone with advanced features.",
    stock: 10,
  },

  {
    title: "Samsung Galaxy S21",
    category: "mobile",
    image: "/images/Samsung Galaxy S21.png",
    price: 999,
    info: "High-performance smartphone with excellent camera.",
    stock: 10,
  },

  {
    title: "Google Pixel 6",
    category: "mobile",
    image: "/images/Google Pixel 6.png",
    price: 899,
    info: "Premium Android smartphone with top-notch features.",
    stock: 8,
  },

  {
    title: "OnePlus 9 Pro",
    category: "mobile",
    image: "/images/OnePlus 9 Pro.png",
    price: 799,
    info: "Premium Android smartphone with top-notch features.",
    stock: 11,
  },

  {
    title: "Xiaomi Mi 11",
    category: "mobile",
    image: "/images/Xiaomi Mi 11.png",
    price: 699,
    info: "Affordable flagship smartphone with powerful processor.",
    stock: 14,
  },

  {
    title: "iPhone 12 Mini",
    category: "mobile",
    image: "/images/iPhone 12 Mini.png",
    price: 699,
    info: "Compact iPhone with powerful features.",
    stock: 9,
  },

  {
    title: "Samsung Galaxy Note 20",
    category: "mobile",
    image: "/images/Samsung Galaxy Note 20.png",
    price: 799,
    info: "Premium smartphone with S Pen and large display.",
    stock: 7,
  },

  // ================= HEADPHONES =================

  {
    title: "AirPods Max",
    category: "headphone",
    image: "/images/AirPods Max.png",
    price: 559,
    info: "A perfect balance of high-fidelity audio.",
    stock: 12,
  },

  {
    title: "Sony WH1000XM4",
    category: "headphone",
    image: "/images/Sony WH1000XM4.png",
    price: 349,
    info: "Industry leading noise cancellation with high resolution audio.",
    stock: 15,
  },

  {
    title: "Bose QuietComfort 35",
    category: "headphone",
    image: "/images/Bose QuietComfort 35.png",
    price: 299,
    info: "Wireless Bluetooth headphones with world-class noise.",
    stock: 13,
  },

  {
    title: "Sennheiser HD 450BT",
    category: "headphone",
    image: "/images/Sennheiser HD 450BT.png",
    price: 199,
    info: "Wireless over-ear headphones with active noise cancellation.",
    stock: 20,
  },

  {
    title: "Apple AirPods Pro",
    category: "headphone",
    image: "/images/Apple AirPods Pro.png",
    price: 240,
    info: "Active noise cancellation for immersive sound.",
    stock: 20,
  },

  {
    title: "Beats Solo Pro",
    category: "headphone",
    image: "/images/Beats Solo Pro.png",
    price: 299,
    info: "Wireless noise cancelling on-ear headphones.",
    stock: 14,
  },

  {
    title: "Jabra Elite 85h",
    category: "headphone",
    image: "/images/Jabra Elite 85h.png",
    price: 249,
    info: "Smart active noise cancelling headphones.",
    stock: 16,
  },

  {
    title: "Bowers & Wilkins PX7",
    category: "headphone",
    image: "/images/Bowers & Wilkins PX7.png",
    price: 399,
    info: "Over-ear noise cancelling wireless headphones.",
    stock: 8,
  },

  {
    title: "HomePod mini",
    category: "headphone",
    image: "/images/HomePod mini.png",
    price: 239,
    info: "5 colors available.",
    stock: 12,
  },

  {
    title: "AKG N700NC M2",
    category: "headphone",
    image: "/images/AKG N700NC M2.png",
    price: 299,
    info: "Wireless over-ear noise cancelling headphones.",
    stock: 10,
  },

  // ================= DEALS =================

  {
    title: "Sony WH-1000XM4 Deal",
    category: "deals",
    image: "/images/Sony WH 1000XM4.png",
    price: 349,
    info: "Special deal: noise cancelling headphones.",
    stock: 10,
  },

  {
    title: "Apple AirPods Pro Deal",
    category: "deals",
    image: "/images/Apple AirPods Pro.png",
    price: 249,
    info: "Active noise cancellation for immersive sound.",
    stock: 15,
  },

  {
    title: "MacBook Pro 16 Deal",
    category: "deals",
    image: "/images/MacBook Pro 16.png",
    price: 2399,
    info: "Powerful laptop with stunning Retina display.",
    stock: 5,
  },

  {
    title: "HP Spectre x360 Deal",
    category: "deals",
    image: "/images/HP Spectre x360.png",
    price: 1599,
    info: "Versatile 2-in-1 laptop with sleek design.",
    stock: 5,
  },

  {
    title: "Ipad Mini Deal",
    category: "deals",
    image: "/images/Ipad Mini.png",
    price: 539,
    info: "Compact size and 5 colors available.",
    stock: 9,
  },

  {
    title: "iPhone 13 Pro Deal",
    category: "deals",
    image: "/images/iPhone 13 Pro.png",
    price: 1099,
    info: "Flagship smartphone with advanced features.",
    stock: 6,
  },

  {
    title: "Supreme Water Bottle",
    category: "deals",
    image: "/images/Supreme Water Bottle.png",
    price: 19,
    info: "1 Litre water bottle.",
    stock: 50,
  },
];

const seedProducts = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Product.deleteMany();

    console.log("Old products removed");

    await Product.insertMany(products);

    console.log("Products seeded successfully");

    process.exit();

  } catch (err) {

    console.log(err.message);

    process.exit(1);
  }
};

seedProducts();