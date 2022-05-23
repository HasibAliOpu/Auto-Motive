import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="navbar bg-violet-500 text-lg  text-slate-300 font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                {user ? (
                  <button onClick={() => signOut(auth)} className="text-bold">
                    LogOut
                  </button>
                ) : (
                  <NavLink to="/Login">Login</NavLink>
                )}
              </li>
              <li>
                <span>{user ? user?.displayName : ""}</span>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-white text-2xl">
            Auto-Motive
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              {user ? (
                <button
                  onClick={() => signOut(auth)}
                  className="font-bold  shadow-lg "
                >
                  LogOut
                </button>
              ) : (
                <NavLink to="/Login">Login</NavLink>
              )}
            </li>
            <li>
              <span>{user ? user?.displayName : ""}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
