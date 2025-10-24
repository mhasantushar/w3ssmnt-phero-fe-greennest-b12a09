import React from "react";
import logoApp from "../assets/logo.png";
import "../../src/index.css";
import { NavLink } from "react-router";
import { RiHome9Fill, RiPlantFill } from "react-icons/ri";
import { FaUserGear } from "react-icons/fa6";

const RootHeaderComp = () => {
  const rootMenuItems = (
    <>
      <li>
        <NavLink to="/">
          <RiHome9Fill />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/plant">
          <RiPlantFill />
          Plant
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth/profile">
          <FaUserGear />
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-none">
        <nav className="navbar-start">
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
              className="root-menu-items menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {rootMenuItems}
            </ul>
          </div>
          <div className="flex gap-0 justify-start items-center">
            <img className="h-12" src={logoApp} alt="App Logo" />
            <a className="btn btn-link text-3xl text-secondary">greenest</a>
          </div>
        </nav>
        <nav className="navbar-center hidden lg:flex">
          <ul className="root-menu-items menu menu-horizontal px-1">
            {rootMenuItems}
          </ul>
        </nav>
        <nav className="navbar-end">
          <a className="btn px-8">Sign In</a>
        </nav>
      </div>
    </div>
  );
};

export default RootHeaderComp;
