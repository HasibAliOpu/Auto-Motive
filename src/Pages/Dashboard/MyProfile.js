import React from "react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div>
      <h1>MY Profile!</h1>
      <Link to={`/dashboard/addProfile`} className="btn btn-primary">
        Add Profile
      </Link>
      <Link to={`/dashboard/updateProfile`} className="btn btn-primary">
        Update Profile
      </Link>
    </div>
  );
};

export default MyProfile;
