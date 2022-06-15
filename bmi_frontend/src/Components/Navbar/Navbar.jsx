import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    const [show,setShow]=useState(false)
    console.log(show)
    document.querySelectorAll('.navbar__item').forEach(item=>{
        item.addEventListener('click',()=>{
            setShow(false)
        })
    })
  return (
    <div className={`container-fluid navbar  ${show ? "showNav" : ''}`}>
      <div className="row ">
        <div className="col-xl-10  col-lg-12  col-md-12 col-sm-12">
        {
            !show ? <i className="fa-solid fa-bars" onClick={()=>setShow(!show)} ></i> :
            <i onClick={()=>setShow(!show)} className="fa-solid fa-xmark"></i>
        }
          <Link to="/" className="navbar__brand">
            <img
              src='https://i.pinimg.com/originals/bf/94/9d/bf949dba3df5479c96964b86a1ebff63.png'
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to='/'>Home</Link>
            </li>
            <li className="navbar__item">
              <a href="#!">Service </a>
            </li>
            <li className="navbar__item">
              <Link to="/product">Our Products</Link>
              <ul className="inneritem">
                <li>
                  <a href="#!">Carane</a>
                </li>
                <li>
                  <a href="#!">Tractor</a>
                </li>
                <li>
                  <a href="#!">Drill</a>
                </li>
                <li>
                  <a href="#!">Tools</a>
                </li> 
                <li>
                  <a href="#!">Others</a>
                </li>
              </ul>
            </li>
            <li className="navbar__item">
              <a href="#!">Offers</a>
            </li>
            <li className="navbar__item">
              <a href="#!">Buy Online</a>
            </li>
            <li className="navbar__item">
              <a href="#!">Vacancy</a>
            </li>
            <li className="navbar__item">
              <a href="#!">Partners</a>
            </li>
            <li className="navbar__item">
              <a href="#!">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
