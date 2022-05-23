import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order }) => {
  const { name, partName, price, quantity } = order;
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
          <Link
            to="/dashboard"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Paid
          </Link>
        </td>
      </tr>
    </>
  );
};

export default OrderRow;
