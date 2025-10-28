import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "../providers/AuthContext";
import { toast } from "react-toastify";

const AuthEmailUpd = () => {
  const { loggedInUser, setLoggedInUser } =
    useContext(AuthContext);

  const fmailRef = useRef(null);

  useEffect(() => {
    if (loggedInUser) {
      fmailRef.current.value = loggedInUser.email || "";
    }
  }, [loggedInUser]);

  const handleUpdateEmail = (e) => {
    e.preventDefault();

    if (!loggedInUser) {
      toast.error("No logged in user found");
      return;
    }

    

    const vMail = e.target.fmail?.value || "";
    console.log(vMail);



    // doUpdateProfile(vName, vPhoto)
    //   .then(() => {
    //     // the builtin fuction wil update firebase db, so came up with th following line that updates the context..
    //     setLoggedInUser({
    //       ...loggedInUser,
    //       displayName: vName,
    //       photoURL: vPhoto,
    //     });
    //     // console.log(loggedInUser);
    //     toast.success("Profile updated successfully");
    //   })
    //   .catch((err) => {
    //     toast.err(`Updating profile failed! ${err.message}`);
    //   });
  };

  return (
    <div className="hero bg-base-200 min-h-screen rounded-xl p-24">
      <div className="hero-content gap-12 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold">Update Email!</h1>
          <p className="py-6 text-red-800">
            Note that you have to sign back in after email is changed.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateEmail} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="fmail"
                required
                ref={fmailRef}
              />

              <button type="submit" className="btn bg-secondary mt-4">
                Update Email <span className="text-red-800">and Log Out</span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthEmailUpd;
