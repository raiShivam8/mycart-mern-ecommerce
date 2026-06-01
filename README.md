# MyCart Real MERN Ecommerce

This project keeps the previous UI/assets and adds a real MERN backend.

## Folders

```txt
frontend/  React + Vite UI
backend/   Node.js + Express + MongoDB
```

## Backend Start

```bash
cd backend
npm install
npm run seed
npm run dev
```

Default `.env` already included:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mycart_ecommerce
JWT_SECRET=mycart_super_secret_key_123
```

If you use MongoDB Atlas, replace `MONGO_URI`.

## Frontend Start

```bash
cd frontend
npm install
npm run dev
```

## Admin Login

First registered user becomes admin automatically.

Seed admin:
```txt
Email: admin@mycart.com
Password: admin123
```

## Features

- Previous UI style and original images
- Login / Register
- Safe password hashing with bcrypt
- JWT authentication
- Cart with localStorage
- Buy Now button fixed
- Checkout page
- COD / Demo Card / Demo UPI
- Order creation in MongoDB
- My Orders page
- Order tracking timeline
- Admin dashboard
- Admin order status update
- MongoDB env fallback fix
