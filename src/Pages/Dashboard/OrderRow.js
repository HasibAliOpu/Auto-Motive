import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order }) => {
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          Apple MacBook Pro 17"
        </th>
        <td class="px-6 py-4">Sliver</td>
        <td class="px-6 py-4">Laptop</td>
        <td class="px-6 py-4">$2999</td>
        <td class="px-6 py-4">$2999</td>
        <td class="px-6 py-4 text-right">
          <Link
            to="/dashboard"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </Link>
        </td>
      </tr>
    </>
  );
};

export default OrderRow;
