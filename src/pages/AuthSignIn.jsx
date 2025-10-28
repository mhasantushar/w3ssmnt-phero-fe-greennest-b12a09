import React, { useContext, useRef, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../providers/AuthContext";

const AuthSignIn = () => {
  // state var for password's visibility mgmt
  const [passwordVisible, setPasswordVisible] = useState(false);

  // these vars will be used to redirect after login,
  // when came here from a private route
  const currentLocation = useLocation();
  const intendedLocation = currentLocation.state || "/";
  // console.log(intendedLocation);
  const navigate = useNavigate();

  const {
    setLoggedInUser,
    doSignInWithEmailAndPassword,
    doSignInGoogleWithPopup,
    doSendPasswordResetEmail,
    setPageIsLoading,
  } = useContext(AuthContext);

  // this is to catch email field's value to use in 'Forgot Password' module
  const refEmailInputField = useRef(null);

  const handleEmailSignIn = (e) => {
    e.preventDefault();

    const vMail = e.target.fmail?.value || "";
    const vPass = e.target.fpass?.value || "";
    // console.log({ vMail, vPass });

    doSignInWithEmailAndPassword(vMail, vPass)
      .then((userCredential) => {
        // e.target.reset();
        // console.log(userCredential);
        const user = userCredential.user;
        // console.log(user);

        toast.success(`User ${user.email} logged in successfully.`);
        setLoggedInUser(user);
        e.target.reset();

        // console.log(intendedLocation);
        navigate(intendedLocation);
      })

      .catch((error) => {
        toast.error(`Login attempt failed! ${error.message}.`);
      });
    setPageIsLoading(false);
  };

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

        toast.success(`User ${user.email} logged in successfully.`);
        setLoggedInUser(user);
        navigate(intendedLocation);
      })
      .catch((error) => {
        // The email of the user's account used.
        const email = error.customData.email;

        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(`Login with ${email} failed - ${error.message}.`);
      });
    setPageIsLoading(false);
  };

  const handleUserResetPassword = () => {
    // console.log(emailFieldInput); // to get email value using controlled comnent
    // console.log(refEmailInputField); // alternet approach to get the email field's value
    const email = refEmailInputField.current.value;

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
          <h1 className="text-6xl font-bold">Welcome Back!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleEmailSignIn} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="fmail"
                required
                ref={refEmailInputField}
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

              <button
                className="cursor-pointer hover:underline"
                onClick={handleUserResetPassword}
                type="button"
              >
                Forgot Password?
              </button>

              <button type="submit" className="btn bg-secondary mt-4">
                Sign In
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
                Don’t have an account?{" "}
                <Link
                  to="/auth/register"
                  className="text-secondary font-semibold"
                >
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
