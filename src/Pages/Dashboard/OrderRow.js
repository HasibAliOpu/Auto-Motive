import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import CustomToast from "../../Modal/CustomToast";
import DeleteOrder from "../../Modal/DeleteOrder";

const OrderRow = ({ order, refetch, state }) => {
  const { _id, name, partName, price, quantity, paid, status, transactionId } =
    order;
  const [Toast] = CustomToast();
  const handleDeleteOrder = () => {
    const url = `http://localhost:5000/order/${_id}`;

    DeleteOrder(url, refetch);
  };
  const handleShipping = async () => {
    const newStatus = {
      pending: "shipped",
    };
    const { data } = await axios.put(
      `http://localhost:5000/order/${_id}`,
      newStatus
    );
    if (data.modifiedCount > 0) {
      Toast.fire({
        icon: "success",
        title: "Order Successfully Shipped!",
      });
      refetch();
    }
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

        {state ? (
          <td className="px-6 py-4">
            {!paid && (
              <>
                <button className="btn btn-xs mr-1">unpaid</button>
                <Link to="/">
                  <button
                    onClick={handleDeleteOrder}
                    className="btn btn-xs bg-red-500 border-none text-white"
                  >
                    Cancel
                  </button>
                </Link>
              </>
            )}
            {status && (
              <span
                onClick={handleShipping}
                disabled={status === "shipped"}
                className="btn btn-xs bg-green-500 border-none text-white"
              >
                {status}
              </span>
            )}
          </td>
        ) : (
          <td className="px-6 py-4 ">
            {!paid && (
              <>
                <button onClick={handleDeleteOrder} className="btn btn-xs mr-1">
                  Cancel
                </button>
                <Link to={`/dashboard/payment/${_id}`}>
                  <button className="btn btn-xs bg-red-500 border-none text-white">
                    Pay
                  </button>
                </Link>
              </>
            )}
            {paid && (
              <>
                <span className="btn btn-xs bg-green-500 border-none text-white">
                  Paid
                </span>
                <p className="">
                  transactionId:{" "}
                  <span className="badge badge-success text-white ">
                    {transactionId}
                  </span>
                </p>
              </>
            )}
          </td>
        )}
      </tr>
    </>
  );
};

export default OrderRow;
