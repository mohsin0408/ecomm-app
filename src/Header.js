import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./store/Store"; 
import { IoToggleSharp } from "react-icons/io5";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <IoToggleSharp className="ToggleIcon" onClick={handleToggleTheme} />
      <h1>WELCOME BACK</h1>
      <span>
        <Link to='/' className="cart light-mode home" > Home </Link>
        <Link to="/cart" className="cart light-mode"> Go to Cart</Link>
      </span>
    </div>
  );
};

export default Header;