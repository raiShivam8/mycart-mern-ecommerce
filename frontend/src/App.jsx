import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import SearchResults from "./pages/SearchResults";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import TrackOrder from "./pages/TrackOrder";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminSupport from "./pages/admin/AdminSupport";

import BecomeSeller from "./pages/BecomeSeller";
import GiftCards from "./pages/GiftCards";
import HelpCenter from "./pages/HelpCenter";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import "./styles/base.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:category", element: <CategoryPage /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "search", element: <SearchResults /> },
      { path: "cart", element: <Cart /> },
      { path: "become-seller", element: <BecomeSeller /> },
      { path: "gift-cards", element: <GiftCards /> },
      { path: "help-center", element: <HelpCenter /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "track/:id",
        element: (
          <ProtectedRoute>
            <TrackOrder />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute adminOnly>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "products", element: <AdminProducts /> },
      { path: "orders", element: <AdminOrders /> },
      { path: "users", element: <AdminUsers /> },
      { path: "support", element: <AdminSupport /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
