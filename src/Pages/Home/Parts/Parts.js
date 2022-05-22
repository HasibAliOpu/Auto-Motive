import axios from "axios";
import React, { useEffect, useState } from "react";
import Part from "../Part/Part";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:5000/parts");
      setParts(data);
    })();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 m-16">
        {parts.map((part) => (
          <Part key={part._id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
