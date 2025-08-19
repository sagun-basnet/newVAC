import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigation = useNavigate();
  const { login } = useContext(AuthContext);

  const init = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email.length === 0 || formData.password.length === 0) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    const res = await login(formData);
    // console.log(res);

    alert(res.data.message);

    setFormData(init);

    navigation("/");
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[30%] p-5 bg-white shadow-md rounded-lg flex flex-col gap-12"
      >
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id=""
          placeholder="Enter your email"
          className="border-2 rounded-md p-2 px-4"
          value={formData.email}
          // value="hello"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id=""
          placeholder="Enter your password"
          className="border-2 rounded-md p-2 px-4"
          value={formData.password}
          required
        />
        <button
          className="rounded-md p-2 px-4 bg-green-600 font-bold"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
