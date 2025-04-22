import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const handleSigIn = () => {
    setSignIn(!isSignIn);
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

      <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto left-0 right-0 rounded-lg text-white opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            name=""
            id=""
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address or Phone number"
          name=""
          id=""
          className="p-2 my-2  w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          name=""
          id=""
          className="p-2 my-2 w-full bg-gray-700"
        />

        <button className="p-4 my-4 bg-red-600 w-full">
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
