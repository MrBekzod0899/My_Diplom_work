import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import './vacancy.scss'
function VacancyView() {
  const [vacancy,setVacancy]=useState([])
  let {id}=useParams()

  useEffect(() => {
    fetch(`http://localhost:5000/api/vacancy`)
      .then((res) => res.json())
      .then((data) => {
        setVacancy(data)
      }
    )
    document.querySelector('.vacancyview').innerHTML=''
    fetch(`http://localhost:5000/api/vacancy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        document.querySelector('.vacancyview').innerHTML+=`  
          <h2>${data[0].title}</h2>
          <p>Location: ${data[0].location}</p>
          <p>Price: ${data[0].price}</p>
         <div class='descriptions'>
         ${data[0].description}
         </div>
         <button class="btn applybtn"><a href='https://t.me/fullstackdeveloper99' target="_blank">Easy to Apply</a></button>
        `
      });
  }, [id]);

  
  return (
    <div className="container  vacancy">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12 col-sm-12">
          <div className="row ">
              <div className="col-lg-12 vacancy-body vacancyview"></div>
          </div>
        </div>
        <div className="col-lg-4 search-panel">
          <div className="card">
            <div className="card-body">
              <h4 className="job-title">Similar Job</h4>
              <ul className="similarjob">
               {
                vacancy && 
                vacancy.map((item,index)=>(
                  <li key={index}>
                  <Link to={`/vacancy/${item._id}`}>{item.title}</Link>
                </li>
                ))
               }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancyView;

