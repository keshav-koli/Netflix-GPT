import React, { useState, useRef } from "react";
import Header from "./Header";
import {
  validateFormDataBySignIn,
  validateFormDataBySignUp,
} from "../utils/FormValidation";
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [FormData, SetFormData] = useState(true);
  const navigate = useNavigate();
  const [ResultOfValidation, setResultOfValidation] = useState(null);
  const dispatch = useDispatch();

  // !========== Form ====================
  const handleForm = (e) => {
    e.preventDefault();
    SetFormData(!FormData);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const phone = useRef(null);

  // ! ========== Sign In==================
  const handleSubmitFormBySignIn = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    console.log(email.current.value);
    console.log(password.current.value);
    const message = validateFormDataBySignIn(
      email.current.value,
      password.current.value
    );
    setResultOfValidation(message);
    if (message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/browser");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setResultOfValidation(errorCode + " - " + errorMessage);
        navigate("/");
      });
  };

  // !=========== Sign Up=================
  const handleSubmitFormBySignUp = (e) => {
    e.preventDefault();

    console.log(name.current.value);
    console.log(email.current.value);
    console.log(phone.current.value);
    console.log(password.current.value);

    const message = validateFormDataBySignUp(
      name.current.value,
      email.current.value,
      phone.current.value,
      password.current.value
    );
    setResultOfValidation(message);
    if (message) return;
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
          phoneNumber: phone.current.value,
          photoURL:
            "https://avatars.githubusercontent.com/u/171242187?s=400&u=52d24ff6d1b2115ef9c632576dd7bc25b81b6177&v=4",
        })
          .then(() => {
            // Profile updated!
            const { uid, displayName, email, phoneNumber, photoURL } =
              auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                displayName: displayName,
                email: email,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
              })
            );
            navigate("/browser");
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error);
          });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setResultOfValidation(errorCode + " - " + errorMessage);
        navigate("/");
      });
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="/login_backgroundImage2.jpg"
          alt=""
          className=" w-full h-screen object-cover "
        />
      </div>
      {FormData ? (
        <div className=" p-4 w-4/14 h-6/7 absolute top-20 mx-auto left-0 right-0  bg-black opacity-82 rounded-lg">
          <form className="text-white ">
            <p className="text-4xl font-medium ml-10 mt-10">Sign In</p>
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="border-2 w-4/5 ml-10 my-8 p-2 border-[#606060]  rounded-sm  placeholder:text-white "
            ></input>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              autoComplete="on"
              className="border-2  w-4/5 ml-10 mb-9 p-2 rounded-sm border-[#606060] placeholder:text-white   "
            ></input>
            <p className="ml-10  text-red-500 absolute top-62 text-lg font-medium">
              {ResultOfValidation}
            </p>
            <button
              className="bg-red-600 w-4/5 ml-10 mb-4 mt-6 font-medium p-2 rounded-sm cursor-pointer"
              onClick={handleSubmitFormBySignIn}
            >
              Sign in
            </button>
            <p className=" ml-47 mb-4">OR</p>
            <button className=" w-4/5 ml-10 mb-2  p-2 rounded-sm bg-[#353637] text-white cursor-pointer">
              Use a sign-in code
            </button>
            <button className="ml-35 mb-6 underline cursor-pointer ">
              Forget Password?
            </button>
            <p className=" text-gray-500 ml-10 mb-6">
              New to Netflix?{" "}
              <button
                className="text-white cursor-pointer  font-medium"
                onClick={handleForm}
              >
                Sign up now.
              </button>
            </p>
            <p className="text-sm text-gray-500 ml-10 mb-2">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <p className="text-blue-500 text-xs ml-10 underline">Learn more.</p>
          </form>
        </div>
      ) : (
        <div className=" p-4 w-4/14 h-7/8 absolute top-20 mx-auto left-0 right-0  bg-black opacity-82 rounded-lg">
          <form className="text-white ">
            <p className="text-4xl font-medium ml-10 mt-10">Sign Up</p>
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="border-2 w-4/5 ml-10 my-8 p-2 rounded-sm border-[#606060] placeholder:text-white  "
            ></input>
            <input
              type="email"
              ref={email}
              placeholder="Email"
              className="border-2 w-4/5 ml-10 mb-8 p-2 rounded-sm border-[#606060] placeholder:text-white  "
            ></input>
            <input
              type="number"
              ref={phone}
              placeholder="Mobile Number"
              className="border-2  w-4/5 ml-10 mb-8 p-2 rounded-sm border-[#606060] placeholder:text-white   "
            ></input>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              autoComplete="on"
              className="border-2  w-4/5 ml-10 mb-8 p-2 rounded-sm border-[#606060] placeholder:text-white"
            ></input>
            <button
              className="bg-red-600 w-4/5 ml-10 mb-4 font-medium p-2 rounded-sm cursor-pointer"
              onClick={handleSubmitFormBySignUp}
            >
              Sign Up
            </button>
            <p className="ml-10  text-red-500 mb-2 text-lg font-medium">
              {ResultOfValidation}
            </p>
            <p className=" text-gray-500 ml-10 mb-2">
              Already a user ?{" "}
              <button
                className="text-white cursor-pointer  font-medium"
                onClick={handleForm}
              >
                Sign in
              </button>
            </p>

            <p className="text-sm text-gray-500 ml-10 mb-2">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <p className="text-blue-500 text-xs ml-10 underline">Learn more.</p>
          </form>
        </div>
      )}
      {/* ?===============================================  */}
      <div>
        <footer>
          <div className="bg-[#161616] h-64 w-full border-2  ">
            <div className=" mt-18  w-96 ml-42 ">
              <p className="text-[#B9B9B9] ">
                Questions? Call 000-800-919-1694
              </p>
            </div>
            <div>
              <div className=" grid grid-cols-4 ml-40 mt-4 p-2 gap-8 text-[#B9B9B9] underline ">
                <p>FAQ</p>
                <p>Help Center</p>
                <p>Terms of Use</p>
                <p>Privacy</p>
                <p>Cookie Preferences</p>
                <p>Corporate Information</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;
