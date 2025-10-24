import React, { useRef, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";

const AuthSignIn = () => {
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
          <h1 className="text-6xl font-bold">Welcome Back!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <fieldset className="fieldset">
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

              <button
                className="cursor-pointer hover:underline"
                // onClick={handleUserResetPassword}
                type="button"
              >
                Forgot Password?
              </button>

              <button type="submit" className="btn bg-secondary mt-4">
                Sign In
              </button>

              <p className="mt-3 text-sm text-center">
                Don’t have an account?{" "}
                <Link to="/auth/register" className="text-secondary font-semibold">
                  Register One
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthSignIn;
