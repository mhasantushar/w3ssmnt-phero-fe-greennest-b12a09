import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { RiHome9Fill, RiPlantFill } from "react-icons/ri";
import { FaUserGear } from "react-icons/fa6";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import "../../src/index.css";
import AuthContext from "../providers/AuthContext";
import logoApp from "../assets/logo.png";

const RootHeader = () => {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser, doSignOut, pageIsLoading } =
    useContext(AuthContext);
  // console.log(loggedInUser);

  useEffect(()=>{
    if (loggedInUser){
      // console.log (loggedInUser.photoURL || '');
    }
  },[loggedInUser])

  const handleUserSignOut = () => {
    doSignOut()
      .then(() => {
        toast.success("User signed off.");
        setLoggedInUser(null);
        navigate("/auth/signin");
      })
      .catch((error) => {
        toast.error(
          `Sign out attempt failed! ${error.code} - ${error.message}.`
        );
      });
  };

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
            <Link to="/">
              <img className="h-12" src={logoApp} alt="App Logo" />
            </Link>
            <Link to="/" className="btn btn-link text-3xl text-secondary">
              greenest
            </Link>
          </div>
        </nav>
        <nav className="navbar-center hidden lg:flex">
          <ul className="root-menu-items menu menu-horizontal px-1">
            {rootMenuItems}
          </ul>
        </nav>

        <nav className="navbar-end">
          {/* {console.log (loggedInUser)} */}
          {pageIsLoading ? (
            <MoonLoader color="#ABD373" size={36} />
          ) : loggedInUser ? (
            <div className="space-y-3 text-center">
              <div className="dropdown dropdown-hover dropdown-end">
                <div tabIndex={0} role="button" className="m-1 btn btn-link">
                  <img
                    src={
                      loggedInUser?.photoURL ||
                      "https://i.ibb.co/1GsJNNFs/App-Error.png"
                    }
                    className="mx-auto rounded-full w-12 h-12"
                    alt="User's Photo"
                  />
                </div>
                <div
                  tabIndex="-1"
                  className="z-1 bg-base-100 shadow-md p-2 rounded-box w-52 dropdown-content menu"
                >
                  <h2 className="font-semibold text-xl">
                    {loggedInUser?.displayName || "Display name not found"}
                  </h2>
                  <p className="mb-4">{loggedInUser?.email}</p>

                  <button
                    onClick={handleUserSignOut}
                    className="btn btn-soft btn-error"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <button className="btn btn-soft">
                <Link to={"/auth/signin"}>Sign in</Link>
              </button>
              {` `}
              <button className="btn btn-soft">
                <Link to={"/auth/register"}>Register</Link>
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default RootHeader;
