import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import job1 from '../../assets/job.webp'
import './vacancy.scss'
function Vacancy() {
  const [vacancy, setVacancy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/vacancy")
      .then((res) => res.json())
      .then((data) => {
        setVacancy(data);
      });
  }, []);

  return (
    <div className="container vacancy">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12 col-sm-12">
          <div className="row ">
           {
            vacancy.map((item,index)=>{
              return(
                <div className="col-lg-12 ">
                  <Link to={`/vacancy/${item._id}`} className='vacancy-body'>
                  <div className="left" >
                  <img src={job1} className='img-fluid' alt="vacancy" />
                  <p>{item.price}</p>
                </div>
                <div className="right">
                  <p className="vacancy-title"><span>{item.title}</span><span>-{item.location}</span></p>
                  <p className="descriptions">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere veritatis mollitia placeat esse dolores. Ratione,
                    tempore blanditiis perspiciatis dignissimos dolor
                  </p>
                  <p className="tags"><span>GO</span><span>C++</span><span>Postgresql</span></p>
                </div>
                  </Link>
              </div>
              )
            })
           }
          </div>
        </div>
        <div className="col-lg-4 search-panel">
          <div className="card">
            <div className="card-body">
              <select className="form-select">
                <option>Any level</option>
                <option>Project Manager</option>
                <option>Sale Manager</option>
                <option>Master</option>
                <option>Intern</option>
              </select>
              <select className="form-select">
                <option>Any Scope</option>
                <option>Part Time</option>
                <option>Full Time</option>
                <option>Offline</option>
                <option>Online</option>
              </select>
              <select className="form-select">
                <option>Any level</option>
                <option>Project Manager</option>
                <option>Sale Manager</option>
                <option>Master</option>
                <option>Intern</option>
              </select>
              <div className="search-action">
                <button className="btn btn-outline-secondary ">
                  CLEAR
                </button>
                <button className="btn btn-secondary">
                  SEARCH
                </button>
              </div>
            </div>
          </div>
          <div className="jointelegram">
            <svg height="120" width="120" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"></path></svg>
            <a href="#!">Follow on Telegram </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
