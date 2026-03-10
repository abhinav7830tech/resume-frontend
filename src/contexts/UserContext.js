"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

const SESSION_TIMEOUT = 24 * 60 * 60 * 1000;

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkSession = () => {
    if (typeof window === "undefined") return;
    
    const loginTime = localStorage.getItem("login_time");
    if (loginTime) {
      const elapsed = Date.now() - parseInt(loginTime);
      if (elapsed > SESSION_TIMEOUT) {
        logout();
        return false;
      }
    }
    return true;
  };

  const resetSession = () => {
    if (typeof window !== "undefined" && localStorage.getItem("access_token")) {
      localStorage.setItem("login_time", Date.now().toString());
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const token = localStorage.getItem("access_token");
    const storedUser = localStorage.getItem("user");
    

    if (token && storedUser) {
      if (!checkSession()) {
        setIsLoading(false);
        return;
      }
      setAccessToken(token);
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);

    const handleActivity = () => {
      resetSession();
    };

    window.addEventListener("click", handleActivity);
    window.addEventListener("keypress", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("mousemove", handleActivity);

    const sessionCheckInterval = setInterval(checkSession, 60000);

    return () => {
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("mousemove", handleActivity);
      clearInterval(sessionCheckInterval);
    };
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setAccessToken(token);
    localStorage.setItem("access_token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("login_time", Date.now().toString());
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    localStorage.removeItem("login_time");
  };

  const updateUser = (updates) => {
    setUser((prev) => {
      const updated = { ...prev, ...updates };
      localStorage.setItem("user", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <UserContext.Provider value={{ user, accessToken, login, logout, updateUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
