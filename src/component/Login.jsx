import React from "react";
import Header from "./Header";
// import netflix_backgroundImage from "../../public/netflix_backgroundImage";
const Login = () => {
  return (
    <div className="">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg"
          alt=""
          className=""
        />
      </div>
      <div className="border-2 p-4 w-4/14 h-6/7 absolute top-36 left-130  bg-black opacity-80 rounded-sm">
        <form className="text-white ">
          <p className="text-4xl font-medium ml-10 mt-10">Sign In</p>
          <input type="text" placeholder="Email or mobile number" className="border-2 w-4/5 ml-10 my-8 p-2 rounded-sm text-[#606060] placeholder:text-white "></input>
          <br></br>
          <input type="text" placeholder="Password" className="border-2  w-4/5 ml-10 mb-8 p-2 rounded-sm text-[#606060] placeholder:text-white   "></input>
          <br></br>
          <button className="bg-red-600 w-4/5 ml-10 mb-4 font-medium p-2 rounded-sm ">Sign in</button>
          <p className=" ml-47 mb-4">OR</p>
          <button className=" w-4/5 ml-10 mb-2  p-2 rounded-sm bg-[#353637] text-white">Use a sign-in code</button>
          <p className="ml-35 mb-6 underline ">Forget Password?</p>
          <p className=" text-gray-500 ml-10 mb-6">New to Netflix? <span className="text-white  font-medium">Sign up now.</span></p>
          <p className="text-sm text-gray-500 ml-10 mb-2">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          <p className="text-blue-500 text-xs ml-10 underline">Learn more.</p>
        </form>
      </div>
      <div>
        <footer>
          <div className="bg-[#161616] h-64 w-full border-2  ">
            <div className=" mt-18  w-96 ml-42 " >
              <p className="text-[#B9B9B9] ">Questions? Call 000-800-919-1694</p>
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
