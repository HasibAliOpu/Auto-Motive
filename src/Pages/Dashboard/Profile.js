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
    image,
    district,
    city,
    linkedin,
    github,
    phone,
  } = profile;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body text-center">
        <p className="text-xl">Name: {name}</p>
        <p>Email: {email}</p>
        <p>phone: {phone}</p>
        <p>Education: {education}</p>
        <p>District: {district}</p>
        <p>City: {city}</p>

        <a
          className="btn btn-link"
          href={linkedin}
          target={"_blank"}
          rel="noreferrer"
        >
          Linkedin: {linkedin}
        </a>

        <a
          className="btn btn-link"
          href={github}
          target={"_blank"}
          rel="noreferrer"
        >
          Github: {github}
        </a>

        <div className="card-actions justify-end">
          <Link
            to={`/dashboard/updateProfile/${_id}`}
            className="btn btn-sm btn-info text-white font-mono shadow-2xl"
          >
            update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
