import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router";
import AuthContext from "../providers/AuthContext";
import { toast } from "react-toastify";

const AuthProfile = () => {
  const { loggedInUser, setLoggedInUser, doUpdateProfile, doSendPasswordResetEmail } =
    useContext(AuthContext);

  const fnameRef = useRef(null);
  const fpurlRef = useRef(null);

  useEffect(() => {
    if (loggedInUser) {
      fnameRef.current.value = loggedInUser.displayName || "";
      fpurlRef.current.value = loggedInUser.photoURL || "";
    }
  }, [loggedInUser]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!loggedInUser) {
      toast.error("No logged in user found");
      return;
    }

    const vName = e.target.fname?.value || "";
    const vPhoto = e.target.fpurl?.value || "";
    // console.log ({vName, vPhoto});

    doUpdateProfile(vName, vPhoto)
      .then(() => {
        // the builtin fuction wil update firebase db, so came up with th following line that updates the context..
        setLoggedInUser({
          ...loggedInUser,
          displayName: vName,
          photoURL: vPhoto,
        });
        // console.log(loggedInUser);
        toast.success("Profile updated successfully");
      })
      .catch((err) => {
        toast.err(`Updating profile failed! ${err.message}`);
      });

      
  };

  const handleUserResetPassword = () => {
    const email = loggedInUser.email;
    // console.log(email);

    if (!email){
      toast.error ('Failed to retrieve email address.');
      return;
    }

    doSendPasswordResetEmail(email)
      .then(() => {
        toast.success(`Password reset email sent to ${email}.`);
      })
      .catch((err) => {
        toast.error(
          `Error sending password rest email! ${err.code} - ${err.message}`
        );
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen rounded-xl p-24">
      <div className="hero-content gap-12 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold">Update Profile!</h1>
          <p className="py-6">
            Welcome back! Please change the values you want to update.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateProfile} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                name="fname"
                ref={fnameRef}
              />

              <label className="label">Photo URL</label>
              <input
                type="url"
                className="input"
                placeholder="Photo URL"
                name="fpurl"
                ref={fpurlRef}
              />

              <button type="submit" className="btn bg-secondary mt-4">
                Update Profile
              </button>

              <button
                className="cursor-pointer hover:underline"
                onClick={handleUserResetPassword}
                type="button"
              >
                Forgot Password?
              </button>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthProfile;
