import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ profile }) => {
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
    <div className="card bg-sky-300 shadow-xl font-bod text-white font-serif">
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
            className="btn btn-primary"
          >
            update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
