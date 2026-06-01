# Fix Notes

Fixed Vite JSX parsing error:

- `frontend/src/data/products.js` no longer contains JSX.
- Product ratings are now numeric values (`rating: 5`, `rating: 4`, etc.).
- Star rendering moved into React components:
  - `frontend/src/components/ProductCard.jsx`
  - `frontend/src/pages/ProductDetail.jsx`

Why this fix was needed:

Vite was failing because JSX like `<FaStar />` was written inside `products.js`. JavaScript data files should not contain JSX unless renamed to `.jsx`. This updated version keeps the file as `.js` and uses clean data-only values.

Run commands:

Backend:
```bash
cd backend
npm install
npm run dev
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

If MongoDB local is not running, start MongoDB first or update `backend/.env` with your MongoDB Atlas URI.
