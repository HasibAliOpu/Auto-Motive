import axios from "axios";
import React, { useEffect, useState } from "react";
import Part from "../Part/Part";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://cryptic-ridge-95940.herokuapp.com/parts",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setParts(data);
    })();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 m-16">
        {parts.slice(0, 6).map((part) => (
          <Part key={part._id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
