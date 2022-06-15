import React from "react";
import { Link } from "react-router-dom";
import './header.scss'
const Header = () => {
  return (
    <header className="header">
      <div>
        <a href="tel">call +998880070355</a>
        <Link to='/login'>Login </Link>
      </div>
    </header>
  );
};

export default Header;
