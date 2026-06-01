import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));

      setToken(savedToken);
    }

    setLoading(false);
  }, []);

  // REGISTER
  const register = async (name, email, password) => {
    const res = await fetch(
      "https://mycart-mern-ecommerce.onrender.com/api/auth/register",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Register failed");
    }

    return data;
  };

  // LOGIN
  const login = async (email, password) => {
    const res = await fetch(
      "https://mycart-mern-ecommerce.onrender.com/api/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("token", data.token);

    localStorage.setItem("user", JSON.stringify(data.user));

    setUser(data.user);

    setToken(data.token);

    return data.user;
  };

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setUser(null);

    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        register,
        login,
        logout,
        loading,
        isLoggedIn: !!user && !!token,
        isAdmin: user?.role === "admin",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);