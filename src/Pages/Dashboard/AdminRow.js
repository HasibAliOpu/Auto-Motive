import axios from "axios";
import React from "react";
import CustomToast from "../../Modal/CustomToast";
const AdminRow = ({ index, user, refetch }) => {
  const { email } = user;
  const [Toast] = CustomToast();
  const handleMakeAdmin = async () => {
    const { data } = await axios.put(
      `http://localhost:5000/user/admin/${email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (data.modifiedCount > 0) {
      Toast.fire({
        icon: "success",
        title: "Successfully Promoting to Admin",
      });
    }

    refetch();
  };

  return (
    <>
      <tr className=" border-b  hover:bg-gray-200 ">
        <td className="px-6 py-4">{index + 1}</td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">
          {user?.role ? (
            <span className="badge badge-success text-white shadow-xl font-mono">
              Admin
            </span>
          ) : (
            <button onClick={handleMakeAdmin} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default AdminRow;
