import book1 from '../assets/books/The Great Gatsby.png'
import book2 from '../assets/books/1984.png'
import book3 from '../assets/books/To Kill a Mockingbird.png'
import book4 from '../assets/books/Pride and Prejudice.png'
import book5 from '../assets/books/The Catcher in the Rye.png'
import book6 from '../assets/books/The Hobbit.png'
import book7 from '../assets/books/Moby-Dick.png'
import book8 from '../assets/books/War and Peace.png'

import laptop1 from '../assets/laptop/Macbook pro 13.png'
import laptop2 from '../assets/laptop/MacBook Pro 16.png'
import laptop3 from '../assets/laptop/HP Spectre x360.png'
import laptop4 from '../assets/laptop/Dell XPS 15.png'
import laptop6 from '../assets/laptop/Laptop sleeve MacBook.png'
import laptop7 from '../assets/laptop/Lenovo ThinkPad X1 Carbon.png'
import laptop8 from '../assets/laptop/Microsoft Surface Laptop 4.png'
import laptop9 from '../assets/laptop/Asus ZenBook 14.png'
import laptop10 from '../assets/laptop/Acer Swift 5.png'
import laptop11 from '../assets/laptop/Razer Blade 15.png'

import mobile1 from '../assets/mobile/Ipad Mini.png'
import mobile2 from '../assets/mobile/iPhone 13 Pro.png'
import mobile3 from '../assets/mobile/Samsung Galaxy S21.png'
import mobile4 from '../assets/mobile/Google Pixel 6.png'
import mobile5 from '../assets/mobile/OnePlus 9 Pro.png'
import mobile6 from '../assets/mobile/Xiaomi Mi 11.png'
import mobile7 from '../assets/mobile/iPhone 12 Mini.png'
import mobile8 from '../assets/mobile/Samsung Galaxy Note 20.png'

import headphone1 from '../assets/headphone/AirPods Max.png'
import headphone2 from '../assets/headphone/Sony WH1000XM4.png'
import headphone3 from '../assets/headphone/Bose QuietComfort 35.png'
import headphone4 from '../assets/headphone/Sennheiser HD 450BT.png'
import headphone5 from '../assets/headphone/Apple AirPods Pro.png'
import headphone6 from '../assets/headphone/Beats Solo Pro.png'
import headphone7 from '../assets/headphone/Jabra Elite 85h.png'
import headphone8 from '../assets/headphone/Bowers & Wilkins PX7.png'
import headphone9 from '../assets/headphone/HomePod mini.png'
import headphone10 from '../assets/headphone/AKG N700NC M2.png'

import deal1 from '../assets/best-deals/Sony WH 1000XM4.png'
import deal2 from '../assets/best-deals/Apple AirPods Pro.png'
import deal3 from '../assets/best-deals/MacBook Pro 16.png'
import deal4 from '../assets/best-deals/HP Spectre x360.png'
import deal5 from '../assets/best-deals/Ipad Mini.png'
import deal6 from '../assets/best-deals/iPhone 13 Pro.png'
import deal7 from '../assets/best-deals/Supreme Water Bottle.png'

import logo1 from '../assets/brand/Staples.png'
import logo2 from '../assets/brand/Sprouts.png'
import logo3 from '../assets/brand/Grocery outlet.png'
import logo4 from '../assets/brand/Mobile stones.png'
import logo5 from '../assets/brand/Sports Basement.png'
import logo6 from '../assets/brand/Container Store.png'
import logo7 from '../assets/brand/Target.png'
import logo8 from '../assets/brand/Bevmo!.png'

export const products = [
 {id:'book-1', category:'books', image:book1, title:'The Great Gatsby', price:15, info:'A classic novel of the Jazz Age, portraying the decadence of the 1920s.', rating:5, stock:20},
 {id:'book-2', category:'books', image:book2, title:'1984', price:12, info:"George Orwell's dystopian novel about a totalitarian regime.", rating:4, stock:25},
 {id:'book-3', category:'books', image:book3, title:'To Kill a Mockingbird', price:10, info:'A profound novel about racial injustice in the Deep South.', rating:5, stock:15},
 {id:'book-4', category:'books', image:book4, title:'Pride and Prejudice', price:9, info:"Jane Austen's romantic novel about manners and marriage.", rating:4, stock:14},
 {id:'book-5', category:'books', image:book5, title:'The Catcher in the Rye', price:11, info:'A novel about teenage rebellion and angst.', rating:3, stock:10},
 {id:'book-6', category:'books', image:book6, title:'The Hobbit', price:14, info:"J.R.R. Tolkien's fantasy novel about Bilbo Baggins.", rating:5, stock:16},
 {id:'book-7', category:'books', image:book7, title:'Moby-Dick', price:18, info:"Herman Melville's epic tale of obsession and the sea.", rating:4, stock:9},
 {id:'book-8', category:'books', image:book8, title:'War and Peace', price:20, info:"Leo Tolstoy's grand narrative of Russian society.", rating:4, stock:7},

 {id:'laptop-1', category:'laptop', image:laptop1, title:'Macbook pro 13', price:1099, info:'256GB, 8 core GPU, 8GB RAM.', rating:4, stock:8},
 {id:'laptop-2', category:'laptop', image:laptop2, title:'MacBook Pro 16', price:2399, info:'Powerful laptop with stunning Retina display.', rating:5, stock:5},
 {id:'laptop-3', category:'laptop', image:laptop3, title:'HP Spectre x360', price:1599, info:'Versatile 2-in-1 laptop with sleek design.', rating:5, stock:7},
 {id:'laptop-4', category:'laptop', image:laptop4, title:'Dell XPS 15', price:1899, info:'Premium laptop with InfinityEdge display.', rating:4, stock:4},
 {id:'laptop-5', category:'laptop', image:laptop6, title:'Laptop sleeve MacBook', price:59, info:'Organic cotton, fairtrade certified.', rating:4, stock:30},
 {id:'laptop-6', category:'laptop', image:laptop7, title:'Lenovo ThinkPad X1 Carbon', price:1499, info:'Business laptop with durable build.', rating:4, stock:6},
 {id:'laptop-7', category:'laptop', image:laptop8, title:'Microsoft Surface Laptop', price:1299, info:'Elegant laptop with excellent battery life.', rating:4, stock:8},
 {id:'laptop-8', category:'laptop', image:laptop9, title:'Asus ZenBook 14', price:1099, info:'Compact laptop with NanoEdge display.', rating:4, stock:11},
 {id:'laptop-9', category:'laptop', image:laptop10, title:'Acer Swift 5', price:999, info:'Ultralight laptop with powerful performance.', rating:3, stock:12},
 {id:'laptop-10', category:'laptop', image:laptop11, title:'Razer Blade 15', price:2199, info:'Gaming laptop with high-refresh rate display.', rating:5, stock:4},

 {id:'mobile-1', category:'mobile', image:mobile1, title:'Ipad Mini', price:539, info:'Compact size and 5 colors available.', rating:5, stock:13},
 {id:'mobile-2', category:'mobile', image:mobile2, title:'iPhone 13 Pro', price:1099, info:'Flagship smartphone with advanced features.', rating:5, stock:10},
 {id:'mobile-3', category:'mobile', image:mobile3, title:'Samsung Galaxy S21', price:999, info:'High-performance smartphone with excellent camera.', rating:4, stock:10},
 {id:'mobile-4', category:'mobile', image:mobile4, title:'Google Pixel 6', price:899, info:'Premium Android smartphone with top-notch features.', rating:4, stock:8},
 {id:'mobile-5', category:'mobile', image:mobile5, title:'OnePlus 9 Pro', price:799, info:'Premium Android smartphone with top-notch features.', rating:5, stock:11},
 {id:'mobile-6', category:'mobile', image:mobile6, title:'Xiaomi Mi 11', price:699, info:'Affordable flagship smartphone with powerful processor.', rating:4, stock:14},
 {id:'mobile-7', category:'mobile', image:mobile7, title:'iPhone 12 Mini', price:699, info:'Compact iPhone with powerful features.', rating:4, stock:9},
 {id:'mobile-8', category:'mobile', image:mobile8, title:'Samsung Galaxy Note 20', price:799, info:'Premium smartphone with S Pen and large display.', rating:4, stock:7},

 {id:'headphone-1', category:'headphone', image:headphone1, title:'AirPods Max', price:559, info:'A perfect balance of high-fidelity audio.', rating:3, stock:12},
 {id:'headphone-2', category:'headphone', image:headphone2, title:'Sony WH1000XM4', price:349, info:'Industry leading noise cancellation with high resolution audio.', rating:5, stock:15},
 {id:'headphone-3', category:'headphone', image:headphone3, title:'Bose QuietComfort 35', price:299, info:'Wireless Bluetooth headphones with world-class noise.', rating:4, stock:13},
 {id:'headphone-4', category:'headphone', image:headphone4, title:'Sennheiser HD 450BT', price:199, info:'Wireless over-ear headphones with active noise cancellation.', rating:4, stock:20},
 {id:'headphone-5', category:'headphone', image:headphone5, title:'Apple AirPods Pro', price:240, info:'Active noise cancellation for immersive sound.', rating:5, stock:20},
 {id:'headphone-6', category:'headphone', image:headphone6, title:'Beats Solo Pro', price:299, info:'Wireless noise cancelling on-ear headphones.', rating:4, stock:14},
 {id:'headphone-7', category:'headphone', image:headphone7, title:'Jabra Elite 85h', price:249, info:'Smart active noise cancelling headphones.', rating:4, stock:16},
 {id:'headphone-8', category:'headphone', image:headphone8, title:'Bowers & Wilkins PX7', price:399, info:'Over-ear noise cancelling wireless headphones.', rating:5, stock:8},
 {id:'headphone-9', category:'headphone', image:headphone9, title:'HomePod mini', price:239, info:'5 colors available.', rating:5, stock:12},
 {id:'headphone-10', category:'headphone', image:headphone10, title:'AKG N700NC M2', price:299, info:'Wireless over-ear noise cancelling headphones.', rating:4, stock:10},

 {id:'deal-1', category:'deals', image:deal1, title:'Sony WH-1000XM4 Deal', price:349, info:'Special deal: noise cancelling headphones.', rating:5, stock:10},
 {id:'deal-2', category:'deals', image:deal2, title:'Apple AirPods Pro Deal', price:249, info:'Active noise cancellation for immersive sound.', rating:5, stock:15},
 {id:'deal-3', category:'deals', image:deal3, title:'MacBook Pro 16 Deal', price:2399, info:'Powerful laptop with stunning Retina display.', rating:5, stock:5},
 {id:'deal-4', category:'deals', image:deal4, title:'HP Spectre x360 Deal', price:1599, info:'Versatile 2-in-1 laptop with sleek design.', rating:5, stock:5},
 {id:'deal-5', category:'deals', image:deal5, title:'Ipad Mini Deal', price:539, info:'Compact size and 5 colors available.', rating:5, stock:9},
 {id:'deal-6', category:'deals', image:deal6, title:'iPhone 13 Pro Deal', price:1099, info:'Flagship smartphone with advanced features.', rating:5, stock:6},
 {id:'deal-7', category:'deals', image:deal7, title:'Supreme Water Bottle', price:19, info:'1 Litre water bottle.', rating:3, stock:50},
];

export const brands = [
 {image:logo1, name:'Staples', time:'Delivery within 24 hours'},
 {image:logo2, name:'Sprouts', time:'Delivery within 24 hours'},
 {image:logo3, name:'Grocery outlet', time:'Delivery within 24 hours'},
 {image:logo4, name:'Mobile stones', time:'Delivery within 24 hours'},
 {image:logo5, name:'Sports Basement', time:'Delivery within 24 hours'},
 {image:logo6, name:'Container Store', time:'Delivery within 24 hours'},
 {image:logo7, name:'Target', time:'Delivery within 24 hours'},
 {image:logo8, name:'Bevmo!', time:'Delivery within 24 hours'},
];

export const categories = [
 {name:'Books', slug:'books'},
 {name:'Laptop', slug:'laptop'},
 {name:'Mobile', slug:'mobile'},
 {name:'Headphone', slug:'headphone'},
 {name:'Furniture', slug:'furniture'},
 {name:'Handbag', slug:'handbag'},
];

export default { products, brands, categories };
