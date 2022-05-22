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
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            src={part?.img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <h1 className="text-2xl font-bold">{part?.name}</h1>
          <p className="py-6">{part?.description}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form>
            <div className="card-body">
              <div className="text-center">
                <h1 className="text-xl text-blue-400 font-bold">
                  Available-Quantity: {part?.availableQuantity} pieces
                </h1>
                <h1 className="text-md text-orange-400 font-bold">
                  minimum order Quantity: {part?.minimumQuantity} pieces
                </h1>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered border-primary"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered border-primary"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered border-primary"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered border-primary"
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  placeholder="Part Quantity"
                  className="input input-bordered border-primary"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">order now!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPart;
