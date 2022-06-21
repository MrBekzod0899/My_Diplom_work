import React from "react";
import { Link } from "react-router-dom";
import './footer.scss'
const Footer = () => {
  return (
    <div className="footer">
            <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <Link to="/" className="navbar__brand">
                <img
                src='https://i.pinimg.com/originals/bf/94/9d/bf949dba3df5479c96964b86a1ebff63.png'
                alt="logo" 
                />
            </Link>
            <ul>
                <li><span>Amir Temur 16, Yunusobod region ,Toshkent,Uzbekistan </span></li>
                <li><label htmlFor="tel">Tel:</label><a href="#!">+998337341399</a></li>
                <li><label htmlFor="email">Email:</label><a href="#!">bekzodqurbonov1399@gmail.com</a></li>
                <li><label htmlFor="fax">Fax:</label><a href="#!">www.productionmachines.fax</a></li>
            </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                  <ul className="footer-list">
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/service">Service</Link>
                      </li>
                      <li>
                          <Link to="/products">Products</Link>
                      </li>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                      <li>
                          <Link to="/">Buy Online</Link>
                      </li>
                      <li>
                          <Link to="/">Contact Us</Link>
                      </li>
                  </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                  <ul>
                      <li>
                          <Link to="/">Our Services</Link>
                      </li>
                      <li>
                          <Link to="/">Agricultury</Link>
                      </li>
                      <li>
                          <Link to="/">Buildings</Link>
                      </li>
                      <li>
                          <Link to="/">Greenhouse</Link>
                      </li>
                      <li>
                          <Link to="/"></Link>
                      </li>                      
                  </ul>
            </div>
            
        </div>
        </div>
    </div>
    
  );
};

export default Footer;
