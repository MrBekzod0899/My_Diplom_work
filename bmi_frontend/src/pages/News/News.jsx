import React from "react";
import './product.scss'
const News =()=>{
return (
  <>
    <main>
      <div className="latest-technology position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">New Our technology</h1>
          <p className="lead fw-normal">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple's marketing pages.
          </p>
          <a className="btn btn-outline-secondary" href="#!">
            Coming soon
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="product-item d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div>
          <h2 className="display-5">Agriculture</h2>
            <p className="lead">Fastest and Ecology Combine</p>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
             <img className="img-fluid" src="https://www.jcb.com/dfsmedia/261086efe15a46f5afb95d093ef038ea/53517-50124/resize/1600x900/options/keepaspectratio/29924-fastrac-icon-jcb-dot-com-banner-2880x1619px-revb2" alt='product'/>
          </div>
        </div>
        <div className="bg-dark me-md-3  px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div>
          <h2 className="display-5">Buildings</h2>
            <p className="lead">new technologies</p>
          </div>
          <div
            className="bg-light shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
             <img className="img-fluid" src="https://www.liebherr.com/shared/media/mobile-and-crawler-cranes/images/mobile-cranes/ltc-compact-mobile-crane/liebherr-ltc-electric-stage.jpg" alt='product'/>
          </div>
        </div>
      </div>
      <div className="product-item d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-dark text-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div>
          <h2 className="display-5">Tools</h2>
            <p className="lead">Comfortable and Cheap products</p>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
             <img className="img-fluid" src="https://www.liebherr.com/shared/media/mobile-and-crawler-cranes/images/subhome/liebherr-category-teaser-ltm_rechteck_2zu1.jpg" alt='product'/>
          </div>
        </div>
        <div className="bg-light text-dark me-md-3  px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div>
          <h2 className="display-5">Mining machines </h2>
            <p className="lead">Strong and Faster Cranes</p>
          </div>
          <div
            className="bg-light shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
             <img className="img-fluid" src="https://www.theneweconomy.com/wp-content/uploads/2016/10/B021_rt-1.jpg" alt='product'/>
          </div>
        </div>
      </div>

      <div className="product-item d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light text-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
          <h2 className="display-5">Factory machines</h2>
            <p className="lead">Fastest and Ecology Combine</p>
          </div>
          <div
            className="bg-body shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
             <img className="img-fluid" src="https://www.liebherr.com/shared/media/mobile-and-crawler-cranes/images/liccon3/liebherr-ltm1110-5-2-liccon3-subhome-1265x843.jpg" alt='product'/>
          </div>
        </div>
        <div className="bg-dark text-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
          <h2 className="display-5">Greenhouse productions </h2>
            <p className="lead">Eco end new date technologies</p>
          </div>
          <div
            className="bg-body shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
             <img className="img-fluid" src="https://www.liebherr.com/shared/media/mobile-and-crawler-cranes/images/subhome/liebherr-category-teaser-lrt_rechteck_2zu1.jpg" alt='product'/>
          </div>
        </div>
      </div>
    </main>
  </>
);
}

export default News