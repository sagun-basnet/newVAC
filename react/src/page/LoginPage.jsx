import axios from "axios";
import React, { useState } from "react";

const LoginPage = () => {
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

    await axios
      .post("http://192.168.1.47:5555/api/login", formData)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);

        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.error(err);
        alert("Login failed. Please try again.");
      });

    setFormData(init);
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
