import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    const [show,setShow]=useState(false)
    const [categories,setCategories]=useState([])
    console.log(show)
    document.querySelectorAll('.navbar__item').forEach(item=>{
        item.addEventListener('click',()=>{
            setShow(false)
        })
    })

    useEffect(()=>{
      fetch('http://localhost:5000/api/getcategory')
      .then(res=>res.json())
      .then(data=>{
        setCategories(data)
      })
    },[])

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
              src='https://i.pinimg.com/736x/02/e5/1f/02e51f383db8af5cc049528e3501aa4e.jpg'
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
              <Link to='/news'>News </Link>
            </li>
            <li className="navbar__item">
              <Link to="/product">Our Products</Link>
              <ul className="inneritem">
                {
                  categories && 
                  categories.map((item,index)=>(
                    <li key={item._id}>
                      <a href="#!">{item.title}</a>
                    </li>
                  ))
                }
              </ul>
            </li>
            <li className="navbar__item">
              <Link to='/vacancy'>Vacancy</Link>
            </li>
            <li className="navbar__item">
              <Link to='/partners'>Partners</Link>
            </li>
            <li className="navbar__item">
              <Link to='/about'>About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
