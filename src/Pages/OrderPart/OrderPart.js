import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderPart = () => {
  const [part, setPart] = useState();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:5000/parts/${id}`);
      setPart(data);
    })();
  }, [id]);
  return (
    <div>
      <h1>Hello</h1>
      <h1>Id: {part?._id}</h1>
    </div>
  );
};

export default OrderPart;
