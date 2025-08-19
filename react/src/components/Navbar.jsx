import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <>
      <div className="underline">{currentUser?.name}</div>
      {currentUser ? (
        <button className="cursor-pointer" onClick={() => logout()}>
          Logout
        </button>
      ) : (
        <div className="flex">
          <button className="cursor-pointer">Login</button>
          <button className="cursor-pointer">Register</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
