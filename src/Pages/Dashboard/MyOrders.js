import React from "react";
import { useQuery } from "react-query";
import OrderRow from "./OrderRow";
import Loading from "../../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      `https://cryptic-ridge-95940.herokuapp.com/order?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        // localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10 ">
      <table className="w-full  text-sm text-left text-gray-500 ">
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
            <OrderRow
              key={order._id}
              order={order}
              state={false}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
