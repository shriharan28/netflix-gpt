import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonSignIn = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className=" relative  min-h-screen bg-black overflow-x-hidden">
      <img
        className="absolute h-full inset-0 object-cover w-screen opacity-30 md:opacity-100 bg-black"
        src={BG_URL}
        alt="backdrop"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 md:bg-transparent"></div>
      <div className="relative z-20">
        <Header />
      </div>

      <div className="bg-black flex justify-center ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-[90%] md:w-3/12 absolute p-12 text-white bg-black bg-opacity-80 md:my-36 md:mx-auto md:right-0 md:left-0 mt-[40%] rounded-xl md:scale-[1.0] scale-[0.85]"
        >
          <h1 className="font-bold text-2xl text-white py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="font-bold text-red-700">{errorMessage}</p>
          <button
            className="p-4 my-6  bg-red-700 text-white rounded-lg w-full"
            onClick={handleButtonSignIn}
          >
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="my-6 cursor-pointer hover:text-blue-400"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to NetflixGPT? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
