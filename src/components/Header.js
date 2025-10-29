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
    <div className=" absolute w-full px-8 py-2 bg-gradient-to-b from-black/75  z-20 flex justify-between">
      <div className="origin-left scale-[0.8]">
        <img className="w-44" src={LOGO} alt="nfLOGO" />
      </div>
      {user && (
        <div className="flex my-3 origin-right scale-[0.8]">
          {showGptSearch && (
            <select
              className="p-2 mr-5  rounded-lg bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifiers} value={lang.identifiers}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-6 mr-3 rounded-xl  bg-purple-700 text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-lg origin-right scale-[0.8]  "
            alt="userlogo"
            src={user?.photoURL}
          />
          <p className="font-mono scale-[1.09] text-white p-3">
            {user.displayName}
          </p>
          <button
            onClick={handleSignOut}
            className="backdrop-blur-3xl bg-white/60 font-mono font-bold rounded-lg mx-4 px-5 h-[48px] text-black "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
