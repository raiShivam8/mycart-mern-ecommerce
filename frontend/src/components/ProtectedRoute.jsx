import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function ProtectedRoute({
  children,
  adminOnly = false,
}) {

  const {
    isLoggedIn,
    isAdmin,
    loading,
  } = useAuth();

  // WAIT STORAGE LOAD
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // LOGIN CHECK
  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // ADMIN CHECK
  if (adminOnly && !isAdmin) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;