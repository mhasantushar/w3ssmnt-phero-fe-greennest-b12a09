import React, { useContext, useState } from "react";
import AuthContext from "../providers/AuthContext";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const AuthRegister = () => {
  // state var for password's visibility mgmt
  const [passwordVisible, setPasswordVisible] = useState(false);

  // these vars will be used to redirect after login,
  // when came here from a private route
  const currentLocation = useLocation();
  const intendedLocation = currentLocation.state || "/";
  // console.log(intendedLocation);
  const navigate = useNavigate();

  const {
    loggedInUser,
    setLoggedInUser,
    doCreateUserWithEmailAndPassword,
    doUpdateProfile,
    doSignOut,
    doSignInGoogleWithPopup,
    setPageIsLoading
  } = useContext(AuthContext);

  const handleEmailAccountCreation = (e) => {
    e.preventDefault();

    const vName = e.target.fname?.value || "";
    const vPhoto = e.target.fpurl?.value || "";
    const vMail = e.target.fmail?.value || "";
    const vPass = e.target.fpass?.value || "";
    // console.log({ vName, vPhoto, vMail, vPass, });

    if (vPass.length < 6) {
      toast.error("Password should be at least 6 characters.");
      return;
    }

    // verifying password
    const regExpsnForUpperCase = /^(?=.*[A-Z]).*$/;
    const regExpsnForLowerCase = /^(?=.*[a-z]).*$/;

    if (!regExpsnForUpperCase.test(vPass)) {
      toast.error("Password should have at least one uppercase letter.");
      return;
    }
    if (!regExpsnForLowerCase.test(vPass)) {
      toast.error("Password should have at least one lowercase letter.");
      return;
    }

    // creating email account
    doCreateUserWithEmailAndPassword(vMail, vPass)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Account created successfully.");
        setLoggedInUser(user);
        e.target.reset();
        // console.log(loggedInUser);

        // user account creatd, so updating user's name and photourl
        doUpdateProfile(vName, vPhoto)
          .then(() => {
            // the builtin fuction wil update firebase db, so came up with th following line that updates the context..
            setLoggedInUser({
              ...loggedInUser,
              displayName: vName,
              photoURL: vPhoto,
            });
            // console.log(loggedInUser);

            // forcing sign out as the process seems to auto signs in
            doSignOut().then(() => {
              setLoggedInUser(null);
              navigate("/auth/signin");
            });
          })
          .catch((err) => {
            toast.warn(
              `Account created, but additional info not updated! ${err.message}.`
            );
            // forcing sign out as the process seems to auto signs in
            doSignOut().then(() => {
              setLoggedInUser(null);
            });
          });
        // console.log(loggedInUser);
      })

      .catch((err) => {
        toast.error(`User account wasn't created! ${err.message}`);
        setLoggedInUser(null);
      });
  };

  // Google Signin
  const handleGoogleSignin = (e) => {
    e.preventDefault();

    doSignInGoogleWithPopup()
      .then((result) => {
        // console.log(result);

        // This gives a Google Access Token - used to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)

        toast.success("User logged in successfully.");
        setLoggedInUser(user);
        navigate(intendedLocation);
      })
      .catch((err) => {
        // The email of the user's account used.
        // const email = err.customData.email;

        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(`Login failed! ${err.message}.`);
      });
    setPageIsLoading(false);
  };

  return (
    <div className="hero bg-base-200 min-h-[calc(100dvh-285px)] rounded-xl p-24">
      <div className="hero-content gap-12 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold">Register now!</h1>
          <p className="py-6">
            Welcome! Create your account to get started and join our community.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleEmailAccountCreation} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                name="fname"
              />

              <label className="label">Photo URL</label>
              <input
                type="url"
                className="input"
                placeholder="Photo URL"
                name="fpurl"
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="fmail"
                required
              />

              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  name="fpass"
                  required
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

              <div className="flex justify-center items-center gap-2 my-2">
                <div className="bg-base-300 w-16 h-px"></div>
                <span className="text-accent text-sm">or</span>
                <div className="bg-base-300 w-16 h-px"></div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignin}
                className="btn btn-error"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="mt-3 text-sm text-center">
                Already have an account?{" "}
                <Link
                  to="/auth/signin"
                  className="text-secondary font-semibold"
                >
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
