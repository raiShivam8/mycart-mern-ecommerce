const img = (name) => `/images/${name}`;

export const products = [
  { id:'book-1', category:'books', image:img('The Great Gatsby.png'), title:'The Great Gatsby', price:15, info:'A classic novel of the Jazz Age, portraying the decadence of the 1920s.', rating:5, stock:20 },
  { id:'book-2', category:'books', image:img('1984.png'), title:'1984', price:12, info:"George Orwell's dystopian novel about a totalitarian regime.", rating:4, stock:25 },
  { id:'book-3', category:'books', image:img('To Kill a Mockingbird.png'), title:'To Kill a Mockingbird', price:10, info:'A profound novel about racial injustice in the Deep South.', rating:5, stock:15 },
  { id:'book-4', category:'books', image:img('Pride and Prejudice.png'), title:'Pride and Prejudice', price:9, info:"Jane Austen's romantic novel about manners and marriage.", rating:4, stock:14 },
  { id:'book-5', category:'books', image:img('The Catcher in the Rye.png'), title:'The Catcher in the Rye', price:11, info:'A novel about teenage rebellion and angst.', rating:3, stock:10 },
  { id:'book-6', category:'books', image:img('The Hobbit.png'), title:'The Hobbit', price:14, info:"J.R.R. Tolkien's fantasy novel about Bilbo Baggins.", rating:5, stock:16 },
  { id:'book-7', category:'books', image:img('Moby-Dick.png'), title:'Moby-Dick', price:18, info:"Herman Melville's epic tale of obsession and the sea.", rating:4, stock:9 },
  { id:'book-8', category:'books', image:img('War and Peace.png'), title:'War and Peace', price:20, info:"Leo Tolstoy's grand narrative of Russian society.", rating:4, stock:7 },

  { id:'laptop-1', category:'laptop', image:img('Macbook pro 13.png'), title:'Macbook pro 13', price:1099, info:'256GB, 8 core GPU, 8GB RAM.', rating:4, stock:8 },
  { id:'laptop-2', category:'laptop', image:img('MacBook Pro 16.png'), title:'MacBook Pro 16', price:2399, info:'Powerful laptop with stunning Retina display.', rating:5, stock:5 },
  { id:'laptop-3', category:'laptop', image:img('HP Spectre x360.png'), title:'HP Spectre x360', price:1599, info:'Versatile 2-in-1 laptop with sleek design.', rating:5, stock:7 },
  { id:'laptop-4', category:'laptop', image:img('Dell XPS 15.png'), title:'Dell XPS 15', price:1899, info:'Premium laptop with InfinityEdge display.', rating:4, stock:4 },
  { id:'laptop-5', category:'laptop', image:img('Laptop sleeve MacBook.png'), title:'Laptop sleeve MacBook', price:59, info:'Organic cotton, fairtrade certified.', rating:4, stock:30 },
  { id:'laptop-6', category:'laptop', image:img('Lenovo ThinkPad X1 Carbon.png'), title:'Lenovo ThinkPad X1 Carbon', price:1499, info:'Business laptop with durable build.', rating:4, stock:6 },
  { id:'laptop-7', category:'laptop', image:img('Microsoft Surface Laptop 4.png'), title:'Microsoft Surface Laptop', price:1299, info:'Elegant laptop with excellent battery life.', rating:4, stock:8 },
  { id:'laptop-8', category:'laptop', image:img('Asus ZenBook 14.png'), title:'Asus ZenBook 14', price:1099, info:'Compact laptop with NanoEdge display.', rating:4, stock:11 },
  { id:'laptop-9', category:'laptop', image:img('Acer Swift 5.png'), title:'Acer Swift 5', price:999, info:'Ultralight laptop with powerful performance.', rating:3, stock:12 },
  { id:'laptop-10', category:'laptop', image:img('Razer Blade 15.png'), title:'Razer Blade 15', price:2199, info:'Gaming laptop with high-refresh rate display.', rating:5, stock:4 },

  { id:'mobile-1', category:'mobile', image:img('Ipad Mini.png'), title:'Ipad Mini', price:539, info:'Compact size and 5 colors available.', rating:5, stock:13 },
  { id:'mobile-2', category:'mobile', image:img('iPhone 13 Pro.png'), title:'iPhone 13 Pro', price:1099, info:'Flagship smartphone with advanced features.', rating:5, stock:10 },
  { id:'mobile-3', category:'mobile', image:img('Samsung Galaxy S21.png'), title:'Samsung Galaxy S21', price:999, info:'High-performance smartphone with excellent camera.', rating:4, stock:10 },
  { id:'mobile-4', category:'mobile', image:img('Google Pixel 6.png'), title:'Google Pixel 6', price:899, info:'Premium Android smartphone with top-notch features.', rating:4, stock:8 },
  { id:'mobile-5', category:'mobile', image:img('OnePlus 9 Pro.png'), title:'OnePlus 9 Pro', price:799, info:'Premium Android smartphone with top-notch features.', rating:5, stock:11 },
  { id:'mobile-6', category:'mobile', image:img('Xiaomi Mi 11.png'), title:'Xiaomi Mi 11', price:699, info:'Affordable flagship smartphone with powerful processor.', rating:4, stock:14 },
  { id:'mobile-7', category:'mobile', image:img('iPhone 12 Mini.png'), title:'iPhone 12 Mini', price:699, info:'Compact iPhone with powerful features.', rating:4, stock:9 },
  { id:'mobile-8', category:'mobile', image:img('Samsung Galaxy Note 20.png'), title:'Samsung Galaxy Note 20', price:799, info:'Premium smartphone with S Pen and large display.', rating:4, stock:7 },

  { id:'headphone-1', category:'headphone', image:img('AirPods Max.png'), title:'AirPods Max', price:559, info:'A perfect balance of high-fidelity audio.', rating:3, stock:12 },
  { id:'headphone-2', category:'headphone', image:img('Sony WH1000XM4.png'), title:'Sony WH1000XM4', price:349, info:'Industry leading noise cancellation with high resolution audio.', rating:5, stock:15 },
  { id:'headphone-3', category:'headphone', image:img('Bose QuietComfort 35.png'), title:'Bose QuietComfort 35', price:299, info:'Wireless Bluetooth headphones with world-class noise.', rating:4, stock:13 },
  { id:'headphone-4', category:'headphone', image:img('Sennheiser HD 450BT.png'), title:'Sennheiser HD 450BT', price:199, info:'Wireless over-ear headphones with active noise cancellation.', rating:4, stock:20 },
  { id:'headphone-5', category:'headphone', image:img('Apple AirPods Pro.png'), title:'Apple AirPods Pro', price:240, info:'Active noise cancellation for immersive sound.', rating:5, stock:20 },
  { id:'headphone-6', category:'headphone', image:img('Beats Solo Pro.png'), title:'Beats Solo Pro', price:299, info:'Wireless noise cancelling on-ear headphones.', rating:4, stock:14 },
  { id:'headphone-7', category:'headphone', image:img('Jabra Elite 85h.png'), title:'Jabra Elite 85h', price:249, info:'Smart active noise cancelling headphones.', rating:4, stock:16 },
  { id:'headphone-8', category:'headphone', image:img('Bowers & Wilkins PX7.png'), title:'Bowers & Wilkins PX7', price:399, info:'Over-ear noise cancelling wireless headphones.', rating:5, stock:8 },
  { id:'headphone-9', category:'headphone', image:img('HomePod mini.png'), title:'HomePod mini', price:239, info:'5 colors available.', rating:5, stock:12 },
  { id:'headphone-10', category:'headphone', image:img('AKG N700NC M2.png'), title:'AKG N700NC M2', price:299, info:'Wireless over-ear noise cancelling headphones.', rating:4, stock:10 },

  { id:'deal-1', category:'deals', image:img('Sony WH 1000XM4.png'), title:'Sony WH-1000XM4 Deal', price:349, info:'Special deal: noise cancelling headphones.', rating:5, stock:10 },
  { id:'deal-2', category:'deals', image:img('Apple AirPods Pro.png'), title:'Apple AirPods Pro Deal', price:249, info:'Active noise cancellation for immersive sound.', rating:5, stock:15 },
  { id:'deal-3', category:'deals', image:img('Macbook Pro 16.png'), title:'MacBook Pro 16 Deal', price:2399, info:'Powerful laptop with stunning Retina display.', rating:5, stock:5 },
  { id:'deal-4', category:'deals', image:img('HP Spectre x360.png'), title:'HP Spectre x360 Deal', price:1599, info:'Versatile 2-in-1 laptop with sleek design.', rating:5, stock:5 },
  { id:'deal-5', category:'deals', image:img('Ipad Mini.png'), title:'Ipad Mini Deal', price:539, info:'Compact size and 5 colors available.', rating:5, stock:9 },
  { id:'deal-6', category:'deals', image:img('iPhone 13 Pro.png'), title:'iPhone 13 Pro Deal', price:1099, info:'Flagship smartphone with advanced features.', rating:5, stock:6 },
  { id:'deal-7', category:'deals', image:img('Supreme Water Bottle.png'), title:'Supreme Water Bottle', price:19, info:'1 Litre water bottle.', rating:3, stock:50 },
];

export const brands = [
  { image:img('Staples.png'), name:'Staples', time:'Delivery within 24 hours' },
  { image:img('Sprouts.png'), name:'Sprouts', time:'Delivery within 24 hours' },
  { image:img('Grocery outlet.png'), name:'Grocery outlet', time:'Delivery within 24 hours' },
  { image:img('Mobile stones.png'), name:'Mobile stones', time:'Delivery within 24 hours' },
  { image:img('Sports Basement.png'), name:'Sports Basement', time:'Delivery within 24 hours' },
  { image:img('Container Store.png'), name:'Container Store', time:'Delivery within 24 hours' },
  { image:img('Target.png'), name:'Target', time:'Delivery within 24 hours' },
  { image:img('Bevmo!.png'), name:'Bevmo!', time:'Delivery within 24 hours' },
];

export const categories = [
  { name:'Books', slug:'books' },
  { name:'Laptop', slug:'laptop' },
  { name:'Mobile', slug:'mobile' },
  { name:'Headphone', slug:'headphone' },
  { name:'Furniture', slug:'furniture' },
  { name:'Handbag', slug:'handbag' },
];

export default { products, brands, categories };