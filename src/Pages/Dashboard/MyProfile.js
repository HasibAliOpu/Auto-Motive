import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Loading from "../../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { data: profiles, isLoading } = useQuery("profileInfo", () =>
    fetch(
      `https://cryptic-ridge-95940.herokuapp.com/myProfile/${user.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex justify-center my-5">
        {profiles[0] ? (
          <span className="badge badge-primary">Already Added Profile</span>
        ) : (
          <Link
            to={`/dashboard/addProfile`}
            className="btn btn-primary text-center"
          >
            Add Profile
          </Link>
        )}
      </div>
      <div className="mx-10 my-5">
        {profiles?.map((profile) => (
          <Profile key={profile._id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
