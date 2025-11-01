import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className=" font-mono fixed top-0 left-0 w-full   md:px-8   md:bg-gradient-to-b from-black bg-black md:bg-transparent z-30 flex flex-col md:flex-row items-center md:justify-between origin-top pr-2.5  md:ml-0 md:mt-0 md:scale-[1.0] pt-0 md:pt-0  ">
      <div className="  md:h-full h-full absolute md:relative ">
        <img
          className="  md:origin-left md:scale-[0.8] w-2/6 origin-left scale-[0.7] ml-4 mt-3 md:w-48 md:ml-9 md:mr-6 md:mt-3.5 "
          src={LOGO}
          alt="nfLOGO"
        />
      </div>
      {user && (
        <div className="flex md:my-3 md:origin-right md:scale-[0.8] scale-[0.6] origin-right  md:mr-0 ">
          {showGptSearch && (
            <select
              className="p-2 md:mr-5  rounded-lg bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifiers} value={lang.identifiers}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <img
            className="w-12 h-12 rounded-lg origin-right scale-[0.8]  "
            alt="userlogo"
            src={user?.photoURL}
          />
          <p className="scale-[1.09] text-white  p-3">{user.displayName}</p>
          <button
            className="rounded-lg font-bold text-md mx-2 px-5 h-[48px] bg-purple-700 text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="backdrop-blur-3xl bg-white/60 rounded-lg font-bold text-md mx-4 md:px-5 md:block hidden h-[48px] text-black "
          >
            Sign Out
          </button>
          {!showGptSearch && (
            <button
              onClick={handleSignOut}
              className="backdrop-blur-3xl bg-white/60 rounded-lg font-bold text-md mx-0 md:px-5 md:hidden px-5 h-[48px] text-black "
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
