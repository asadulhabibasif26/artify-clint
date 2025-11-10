import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user , signOutUser} = use(AuthContext);
  const handelLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to LogOut your self!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, LogOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "LogOut Successful!",
          text: "Your has been LogOuted.",
          icon: "success",
        });
        signOutUser()
      }
    });
  };
  const link = (
    <>
      <li>
        <NavLink className="btn btn-accent btn-outline" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-accent btn-outline" to="/artwork">
          Explore Artworks
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-accent btn-outline" to="/addArtwork">
          Add Artwork
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-accent btn-outline" to="/gallery">
          My Gallery
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-accent btn-outline" to="/favorites">
          My Favorites
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">
          {" "}
          ARTIFY
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handelLogOut} className="btn btn-accent btn-outline">
            LogOut
          </button>
        ) : (
          <Link to="/login" className="btn btn-accent btn-outline">
            <button>LogIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
