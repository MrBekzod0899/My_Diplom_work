import React from "react";
import "./content.scss";
const Content = () => {
  return (
    <div className="content">
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
      <div className="ourService container">
        <div className="row">
          <div className="serviceInfo">
            <h4>Our Service</h4>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../assets/icon1.png")} alt="icon1" />
              </div>
              <h4>Deliver</h4>
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
                <img src={require("../../assets/icon2.png")} alt="icon2" />
              </div>
              <div className="card-info">
                <h4>Cheap and comfortable service</h4>
                <p>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolorem fuga similique veritatis
                  consectetur quam molestias! consectetur adipisicing elit.
                  Harum, est.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../assets/icon3.png")} alt="icon3" />
              </div>
              <div className="card-info">
                <h4>High Quality Equipment</h4>
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
                <img src={require("../../assets/icon4.png")} alt="icon4" />
              </div>
              <div className="card-info">
                <h4>Master</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, est. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Iste, tenetur. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vel.
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
