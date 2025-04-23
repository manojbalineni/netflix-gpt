import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { updateProfile } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //Using useRef() to get form data based on reference
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSigIn = () => {
    setSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    //Validate the form data.
    //Use utility to validate the form

    const errorMessage = validateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMessage);
    if (errorMessage) return;
    //Proceed and do Sign or SignUp

    if (!isSignIn) {
      //Signup Logic

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
            photoURL: "https://avatars.githubusercontent.com/u/187825914?v=4",
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

              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Signin Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            "Bad Credentials !!!. Please check the email and password "
          );
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
          alt="banner"
        />
      </div>

      <form
        className="p-12 bg-black absolute w-3/12 my-36 mx-auto left-0 right-0 rounded-lg text-white opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            name=""
            id=""
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address or Phone number"
          name=""
          id=""
          className="p-2 my-2  w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          name=""
          id=""
          className="p-2 my-2 w-full bg-gray-700"
        />
        <p className="text-lg text-red-500 font-bold py-2"> {errorMessage}</p>

        <button
          className="p-4 my-4 bg-red-600 w-full cursor-pointer rounded"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign up"}
        </button>

        <p className="py-2" onClick={handleSigIn}>
          {" "}
          <span className="font-semibold cursor-pointer">
            {" "}
            {isSignIn
              ? "New to Netflix ? Signup Now"
              : "Already Registered ? SignIn Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
