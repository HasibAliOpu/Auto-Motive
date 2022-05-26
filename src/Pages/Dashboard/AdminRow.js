import React from "react";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import CustomToast from "../../Modal/CustomToast";
import { useNavigate } from "react-router-dom";

const AdminRow = ({ index, user, refetch }) => {
  const { email } = user;
  const navigate = useNavigate();

  const [Toast] = CustomToast();
  const handleMakeAdmin = async () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          signOut(auth);
          navigate("/");
          // if i remove the token, the server was crushed :(

          // localStorage.removeItem("accessToken");
          Toast.fire({
            icon: "error",
            title: "You're not a admin, you can't make admin anyone!!",
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          Toast.fire({
            icon: "success",
            title: "Successfully Promoting to Admin",
          });
        }
        refetch();
      });
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
