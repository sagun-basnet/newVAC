import React, { useEffect, useState } from "react";
import axois from "axios";

const FetchAPI = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    // const res = await axois.get("https://jsonplaceholder.typicode.com/posts");
    // // console.log(res.data);
    // setData(res.data);
    await axois
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="p-2 grid grid-cols-4 gap-4">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col p-2 border-2 rounded-md">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-justify">{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FetchAPI;
