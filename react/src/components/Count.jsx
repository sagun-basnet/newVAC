import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1);
    // console.log(count);
  };

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <>
      <p className="font-bold text-xl">{count}</p>
      {count < 5 && (
        <button
          onClick={handleCount}
          className="p-2 px-4 rounded-md bg-blue-600"
        >
          +
        </button>
      )}
    </>
  );
};

export default Count;
