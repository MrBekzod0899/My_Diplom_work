import React from "react";
import "./about.scss";
export default function About() {
  return (
    <div className="about mt-3 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <img
              src={require("../../assets/factory1.jpg")}
              alt="factory"
              className="img-fluid mb-2"
            />
            <img
              src={require("../../assets/factory2.png")}
              alt="factory"
              className="img-fluid mb-2"
            />
            <img
              src={require("../../assets/factory3.webp")}
              alt="factory"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h1 className="title">Our Company info</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              ipsa, vel alias at similique odio soluta dolorem officiis atque
              mollitia accusamus impedit consequatur repellendus excepturi
              molestias praesentium voluptatem consectetur expedita doloribus
              rem cumque! Nam deleniti, laboriosam quidem modi veniam
              voluptatibus expedita saepe illum! Unde voluptatem quo sequi nulla
              ea aliquid?
            </p>
            <h4 className="littleTitle">From Year</h4>
            <p>2018</p>
            <h4 className="littleTitle">Company info</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              doloremque architecto nobis. Necessitatibus hic autem odio porro
              asperiores esse saepe dolorem praesentium minima? Voluptas magni
              error necessitatibus quos magnam incidunt.
            </p>{" "}
            <h4 className="littleTitle">Company info</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              doloremque architecto nobis. Necessitatibus hic autem odio porro
              asperiores esse saepe dolorem praesentium minima? Voluptas magni
              error necessitatibus quos magnam incidunt.
            </p>{" "}
            <h4 className="littleTitle">Company info</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              doloremque architecto nobis. Necessitatibus hic autem odio porro
              asperiores esse saepe dolorem praesentium minima? Voluptas magni
              error necessitatibus quos magnam incidunt.
            </p>{" "}
            <h4 className="littleTitle">Company info</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              doloremque architecto nobis. Necessitatibus hic autem odio porro
              asperiores esse saepe dolorem praesentium minima? Voluptas magni
              error necessitatibus quos magnam incidunt.
            </p>{" "}
            <h4 className="littleTitle">Company info</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              doloremque architecto nobis. Necessitatibus hic autem odio porro
              asperiores esse saepe dolorem praesentium minima? Voluptas magni
              error necessitatibus quos magnam incidunt.
            </p>
          </div>
        </div>
        <div className="row stuffs">
          <h1>Our Stuffs</h1>
          <div className="col-lg-6">
            <h4>Jamomiz ish boshlaganimizdan boshlab 1000+ natijaga erishdi</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quaerat nulla quidem amet maxime nihil accusantium molestiae
              distinctio, perspiciatis ex! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Minus ex est dicta obcaecati modi
              quia, veritatis repellat unde ipsum, saepe deleniti, rerum
              accusamus? Quod natus, mollitia enim repudiandae facere repellat!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              ducimus recusandae explicabo est. Quisquam, unde voluptatem
              nostrum voluptatum veritatis deleniti quaerat mollitia temporibus
              doloribus non vitae est iure itaque similique aliquid sed deserunt
              necessitatibus sit. Odit libero molestias minima tempora!
              <a href="#!" className=" float-end text-primary">see more </a>
            </p>
          </div>
          <div className="stuffList col-lg-6 col-md-12 col-sm 12 col-12">
            <div className="row">
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="col-lg-2">
                <img src="" alt="stuff" />
              </div>
              <div className="row">
                <div className="col-lg-2">
                  <img src="" alt="stuff" />
                </div>
                <div className="col-lg-2">
                  <img src="" alt="stuff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
