import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://192.168.1.20:5555/api/login",
        inputs
      );
      setCurrentUser(res.data.others);
      localStorage.setItem("token", res.data.token);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    alert("Logout successfully..");
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
