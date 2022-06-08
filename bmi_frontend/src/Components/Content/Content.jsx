import React from "react";
import "./content.scss";

import ReactPlayer from "react-player";
const Content = () => {
  return (
    <div className="content">
      <div className="infoService">
        <div className="row">
          <div className="col-lg-3">
            <div className="content-header">
              <i class="fa-solid fa-clock"></i>
              <p>Hours of Operation</p>
              <ul>
                <li>
                  <b>Monday</b>
                  <span>9:00am-7:30pm</span>
                </li>
                <li>
                  <b>Monday</b>
                  <span>9:00am-7:30pm</span>
                </li>
                <li>
                  <b>Monday</b>
                  <span>9:00am-7:30pm</span>
                </li>
                <li>
                  <b>Monday</b>
                  <span>9:00am-7:30pm</span>
                </li>
                <li>
                  <b>Monday</b>
                  <span>9:00am-7:30pm</span>
                </li>
                <li>
                  <b>Monday</b>
                  <span>9:00am-7:30pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="content-header">
              <i class="fa-solid fa-calendar"></i>
              <p>Appointments</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              impedit?
            </p>
            <h4>book now</h4>
          </div>
          <div className="col-lg-3">
            <div className="content-header">
              <i class="fa-solid fa-server"></i>
              <p>Services</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              impedit? Lorem, ipsum dolor.
            </p>
            <h4>book now</h4>
          </div>
          <div className="content-footer">
            <h2>Real Stories for Real Patients</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <ReactPlayer
              className="video-content"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <div className="card-footer">
              <h4>Bekzod Kurbonov</h4>
              <p>Athlete</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <ReactPlayer
              className="video-content"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <div className="card-footer">
              <h4>Bekzod Kurbonov</h4>
              <p>Athlete</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container locations">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="locationInfo">
              <i class="fa-solid fa-location-dot"></i>
              <h4>Conveniently Located</h4>
              <p>
                We are located in the West Mountain area of Hamilton, seconds
                from Limeridge Mall right off the Lincoln Alexander Parkway.
                Free parking is available onsite.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="locationInfo">
              <i class="fa-solid fa-star"></i>
              <h4>Caring Professionals</h4>
              <p>
                Providing you with skilled providers for excellent care. Healthy
                Body first opened 18 years ago and we've been providing care
                with skill and compassion ever since. Experience the difference
                in care yourself.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="locationInfo">
              <i class="fa-solid fa-dollar-sign"></i>
              <h4>Direct Billing</h4>
              <p>
                For your convenience, we bill directly to most insurance
                carriers. Bring your policy information on your first visit and
                we may be able to bill on your behalf, saving you time and money
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="locationInfo">
              <i class="fa-solid fa-hands-holding-child"></i>
              <h4>Complete Care</h4>
              <p>
                With extraordinary people comes extraordinary care. Whether you
                have a workplace injury, a concussion, or pain and stiffness
                from a traffic accident, better care is within reach.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="order">
        <div className="order-content">
          <p>Book Your Appointment Today!</p>
          <span>Call us to make appointment or book online</span>
          <div>
            <button className="btn ">Book Order</button>
          </div>
        </div>
      </div>
      <div className="ourService container">
        <div className="row">
          <div className="serviceInfo">
            <h4>Our Service</h4>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../Assets/icon1.png")} alt="icon1" />
              </div>
              <h4>Physiotherapy</h4>
              <p>
                Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Repellendus qui iusto similique alias
                inventore eaque tempora incidunt eum. Illo non aliquam est amet
                reprehenderit laboriosam repellendus earum 
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../Assets/icon2.png")} alt="icon2" /> 
              </div>
               <div className="card-info">
                  <h4>Chiropractic</h4>
                  <p>
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorem fuga similique
                    veritatis consectetur quam molestias! consectetur
                    adipisicing elit. Harum, est.
                  </p>
                </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../Assets/icon3.png")} alt="icon3" />
              </div>
              <div className="card-info">
                <h4>Naturopathy</h4>
                <p>
                  Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. In temporibus expedita vitae doloremque
                  quis, voluptates quisquam ipsam at! Dolorum, in. amet
                  consectetur adipisicing elit. Harum, est.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../Assets/icon4.png")} alt="icon4" />
              </div>
              <div className="card-info">
                <h4>Additional Services</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, est. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Iste, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
