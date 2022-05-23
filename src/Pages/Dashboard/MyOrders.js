import React from "react";
import { useQuery } from "react-query";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const { data: orders } = useQuery("orders", () =>
    fetch("http://localhost:5000/order").then((res) => res.json())
  );
  // console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary">
        My Orders List: {orders.length}
      </h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Customer name
              </th>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
