import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/kidslogo.png";
import navclass from "../components/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={navclass.nav}>
      <img src={Logo} alt="" />
      <div className={navclass.navlinks}>
        <Link to="/" className={navclass.navlink}>
          Home
        </Link>
        <Link to="/" className={navclass.navlink}>
          Features
        </Link>
        <Link to="/" className={navclass.navlink}>
          Pricing
        </Link>
        <Link to="/" className={navclass.navlink}>
          Contact Us
        </Link>
      </div>
      <div className={navclass.navbtns}>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
