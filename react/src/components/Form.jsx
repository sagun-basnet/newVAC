import React from "react";

const Form = ({ type }) => {
  return (
    <div>
      {type === "Login" ? (
        <h1 className="text-4xl font-bold text-center">Login</h1>
      ) : (
        <h1 className="text-4xl font-bold text-center">Register</h1>
      )}

      {type === "Login" && <button>Login</button>}
    </div>
  );
};

export default Form;
