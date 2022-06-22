import React from "react";
import DeleteProduct from "../../Modal/DeleteProduct";

const ProductCard = ({ part, refetch }) => {
  const {
    _id,
    img,
    name,
    description,
    price,
    availableQuantity,
    minimumQuantity,
  } = part;
  const handleDeleteProduct = () => {
    const url = `https://cryptic-ridge-95940.herokuapp.com/parts/${_id}`;

    DeleteProduct(url, refetch);
  };
  refetch();
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
            onClick={handleDeleteProduct}
            className="btn bg-red-600 border-none text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
