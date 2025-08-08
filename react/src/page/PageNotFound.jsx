import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-6xl font-bold text-center text-red-600">
        404 Page Not Found
      </h1>
      <Link to="/">
        <button className="p-2 px-4 rounded-md bg-green-600 font-bold">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
