import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg"

const Navbar = () => {
  return <>
    <div>
      <img src={Logo} alt="Logo"  className="logo-img" />
      <span className="logo-text">Sparkly</span>
    </div>
    <div>
      <ul className="nav-links">
        <li className="nav-link"><a href="#header">Asosiy</a></li>
        <li className="nav-link"><a href="#about">Haqida</a></li>
        <li className="nav-link"><a href="#mentors">Murabbiylar</a></li>
        <li className="nav-link"><a href="#blogs">Blog</a></li>
        <li className="nav-link"><a href="#blogs">Aloqa</a></li>
      </ul>
    </div>
    <div className="nav-register">
      <a href="#blogs">Kirish</a>
    </div>
  </>;
};

export default Navbar;
