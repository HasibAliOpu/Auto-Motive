import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../../Modal/DeleteModal.js/DeleteModal";

const OrderRow = ({ order, refetch }) => {
  const { _id, name, partName, price, quantity, paid } = order;
  const handleDeleteOrder = () => {
    const url = `http://localhost:5000/order/${_id}`;

    DeleteModal(url, refetch);
  };
  return (
    <>
      <tr className=" border-b  hover:bg-gray-200 ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {name}
        </th>
        <td className="px-6 py-4">{partName}</td>
        <td className="px-6 py-4">${price}</td>
        <td className="px-6 py-4">{quantity}</td>

        <td className="px-6 py-4 text-right">
          {!paid && (
            <>
              <button onClick={handleDeleteOrder} className="btn btn-xs mr-1">
                Cancel
              </button>
              <Link to="/">
                <button className="btn btn-xs bg-red-500 border-none text-white">
                  Pay
                </button>
              </Link>
            </>
          )}
          {paid && (
            <span className="btn btn-xs bg-green-500 border-none text-white">
              Paid
            </span>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrderRow;
