import React, { useRef, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";

const AuthRegister = () => {
  // state var for password's visibility mgmt
  const [passwordVisible, setPasswordVisible] = useState(false);

  // these vars will be used to redirect after login,
  // when came here from a private route
  const currentLocation = useLocation();
  const intendedLocation = currentLocation.state || "/";
  // console.log(intendedLocation);
  const navigate = useNavigate();

  // this is to catch email field's value to use in 'Forgot Password' module
  const refEmailInputField = useRef(null);

  return (
    <div className="hero bg-base-200 min-h-screen rounded-xl p-24">
      <div className="hero-content gap-12 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold">Register now!</h1>
          <p className="py-6">
            Welcome! Create your account to get started and join our community.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <fieldset className="fieldset">
              
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                name="name"
              />
              <label className="label">Photo URL</label>
              <input
                type="url"
                className="input"
                placeholder="Photo URL"
                name="purl"
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="fmail"
                restricted
                ref={refEmailInputField}
              />

              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  name="fpass"
                  restricted
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="top-8 right-6 z-50 absolute cursor-pointer"
                >
                  {passwordVisible ? <LuEye /> : <LuEyeClosed />}
                </span>
              </div>

              <button type="submit" className="btn bg-secondary mt-4">
                Register
              </button>
              
              <p className="mt-3 text-sm text-center">
                Already have an account?{" "}
                <Link to="/auth/signin" className="text-secondary font-semibold">
                  Sing In Here
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthRegister;
