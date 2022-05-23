import React from "react";
import { useQuery } from "react-query";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const { data: orders } = useQuery("orders", () =>
    fetch("http://localhost:5000/order").then((res) => res.json())
  );

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-300 uppercase bg-gray-700 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Customer name
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Payment
            </th>
          </tr>
        </thead>
        <tbody className="text-black ">
          {orders?.map((order) => (
            <OrderRow key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
