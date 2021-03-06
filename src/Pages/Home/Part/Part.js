import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const navigate = useNavigate();
  const {
    _id,
    img,
    name,
    description,
    price,
    availableQuantity,
    minimumQuantity,
  } = part;
  return (
    <div className="card card-compact max-w-md bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="car parts" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p className="text-2xl">
          Price: <span className="text-warning">{price}$</span>
        </p>
        <p>{description.slice(0, 250)}...</p>
        {availableQuantity === 0 ? (
          <>
            <h1 className="text-4xl font-bold text-center pb-10 text-red-500">
              Out Of Stock
            </h1>
          </>
        ) : (
          <>
            <p className="font-bold">Available Quantity: {availableQuantity}</p>
            <p className="font-bold">Minimum Quantity: {minimumQuantity}</p>
          </>
        )}
        <div className="card-actions justify-center">
          <button
            onClick={() => navigate(`/parts/${_id}`)}
            className="btn btn-primary text-white w-full"
            disabled={availableQuantity === 0}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
