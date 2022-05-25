import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Profile = ({ profile }) => {
  const [user] = useAuthState(auth);
  const {
    _id,
    name,
    email,
    education,
    district,
    city,
    linkedin,
    github,
    phone,
  } = profile;
  return (
    <div className="card bg-sky-300 shadow-xl font-bod text-slate-700 font-serif">
      <div className="card-body">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Education: {education}</p>
        <p>District: {district}</p>
        <p>City: {city}</p>
        <p>Linkedin: {linkedin}</p>
        <p>Github: {github}</p>
        <p>phone: {phone}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/dashboard/updateProfile/${_id}`}
            className="btn btn-primary text-white font-mono shadow-2xl"
          >
            update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
