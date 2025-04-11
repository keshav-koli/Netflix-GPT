import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = (e) => {
    // e.preventdefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" absolute bg-gradient-to-b from-black w-full ">
      <div className="flex justify-between">
        <div className=" ">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            className=" w-50 "
          ></img>
        </div>
        {user && (
          <div className=" ml-5 flex p-7 z-20">
            <img src={user.photoURL} className="w-10"></img>
            {/* <img src="../../public/profile_icon.png" className="w-10"></img> */}
            <button className="ml-2 cursor-pointer " onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
