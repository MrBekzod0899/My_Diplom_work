import React from "react";
import { Link } from "react-router-dom";
import './footer.scss'
import logo from '../../Assets/logo3.png'
const Footer = () => {
  return (
    <div className="footer">
            <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <Link to="/" className="navbar__brand">
                <img
                src={logo}
                alt="logo"
                />
            </Link>
            <ul>
                <li><span>1314 Upper Wentworth St,Hamilton, ON L9A 4W2</span></li>
                <li><label htmlFor="tel">Tel:</label><a href="#!">+998337341399</a></li>
                <li><label htmlFor="email">Email:</label><a href="#!">+998337341399</a></li>
                <li><label htmlFor="fax">Fax:</label><a href="#!">+998337341399</a></li>
            </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                  <ul className="footer-list">
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/">Meet The Team</Link>
                      </li>
                      <li>
                          <Link to="/">Insurance Billing</Link>
                      </li>
                      <li>
                          <Link to="/">News</Link>
                      </li>
                      <li>
                          <Link to="/">Book Online</Link>
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
                          <Link to="/">Massage Therapy</Link>
                      </li>
                      <li>
                          <Link to="/">Chiropractic</Link>
                      </li>
                      <li>
                          <Link to="/">Naturopathy</Link>
                      </li>
                      <li>
                          <Link to="/">Physiotherapy</Link>
                      </li>
                      <li>
                          <Link to="/">Acupuncture</Link>
                      </li>
                      <li>
                          <Link to="/">Shockwave Therapy</Link>
                      </li>
                      <li>
                          <Link to="/">Custom Orthotics</Link>
                      </li>
                      <li>
                          <Link to="/">Concussion Management</Link>
                      </li>
                      
                  </ul>
            </div>
            
        </div>
        </div>
    </div>
    
  );
};

export default Footer;
