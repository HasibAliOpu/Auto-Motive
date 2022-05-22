import React, { useState } from "react";
import Part from "../Part/Part";

const Parts = () => {
  const [parts, setParts] = useState([]);

  fetch("http://localhost:5000/parts")
    .then((res) => res.json())
    .then((data) => setParts(data));
  return (
    <div>
      <h1 className="text-4xl">Total Parts: {parts.length}</h1>
      <div className="grid grid-cols-3 gap-10 mx-16">
        {parts.map((part) => (
          <Part key={part._id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
