// AuthContext.js (or AuthContext.tsx for TypeScript)

import { createContext, useContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "abx",
    email: " test ",
  });
  const [permissions, setPermissions] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);

  // Define functions to set user and permissions
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updatePermissions = (newPermissions) => {
    setPermissions(newPermissions);
  };
  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        permissions,
        login,
        logout,
        updatePermissions,
        updateUser,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook to access the context
export function useAuth() {
  return useContext(AuthContext);
}
