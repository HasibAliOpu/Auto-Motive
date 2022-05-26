import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Loading/Loading";
import CustomToast from "../../Modal/CustomToast";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [Toast] = CustomToast();
  const [admin, processing] = useAdmin(user);
  const location = useLocation();
  if (loading || processing) {
    return <Loading />;
  }
  if (!user || !admin) {
    return (
      signOut(auth),
      Toast.fire({
        icon: "error",
        title: "UnAuthorized Access, You can't access Admin route !!",
      }),
      localStorage.removeItem("accessToken"),
      (<Navigate to="/login" state={{ from: location }} replace />)
    );
  }
  return children;
};

export default RequireAdmin;
