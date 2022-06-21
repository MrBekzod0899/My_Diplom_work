import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./slider.scss";
const Slider = () => {
  return (
    <Splide
      options={{
        autoplay:true,
        arrows:false,
        type:'loop',
      }}
      className="slider"
    >
      <SplideSlide >
        <div id="splide1" className="slider-content">
        </div>
        <div className="slider-text">
            <div className="slider-title">
              <h1>Care To Feel Better </h1>
            </div>
            <div className="slider-info">
              Lorem ipsum dolor sit
            </div>
          </div>
      </SplideSlide>
      <SplideSlide >
      <div id='splide2' className="slider-content">
      </div>
      <div className="slider-text">
          <div className="slider-title">
            <h1>Care To Feel Better </h1>
          </div>
          <div className="slider-info">
              Lorem ipsum dolor sit
            </div>
        </div>
      </SplideSlide>
      <SplideSlide >
        <div id="splide3" className="slider-content">
        </div>
        <div className="slider-text">
          <div className="slider-title">
            <h1>Care To Feel Better </h1>
          </div>
          <div className="slider-info">
              Lorem ipsum dolor sit <i className="fa-solid fa-arrow-right-to-arc"></i>
            </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};
export default Slider;
