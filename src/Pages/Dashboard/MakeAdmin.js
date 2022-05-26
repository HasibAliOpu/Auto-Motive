import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import AdminRow from "./AdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://cryptic-ridge-95940.herokuapp.com/user", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-center pt-5 text-2xl font-serif text-green-500">
        Make a Admin!
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10 w-1/2 mx-auto">
        <table className="w-full  text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-300 uppercase bg-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Promotion
              </th>
            </tr>
          </thead>
          <tbody className="text-black ">
            {users?.map((user, index) => (
              <AdminRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
