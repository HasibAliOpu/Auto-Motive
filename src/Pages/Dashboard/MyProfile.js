import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Loading from "../../Loading/Loading";

const MyProfile = () => {
  const { data: profiles, isLoading } = useQuery("profileInfo", () =>
    fetch("http://localhost:5000/myProfile").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="grid grid-cols-1 mx-10 my-5 gap-5 ">
        {profiles?.map((profile) => (
          <Profile key={profile._id} profile={profile} />
        ))}
      </div>
      <Link to={`/dashboard/addProfile`} className="btn btn-primary">
        Add Profile
      </Link>
    </div>
  );
};

export default MyProfile;
