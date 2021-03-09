import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Magnifier from "react-magnifier";

const Map = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section
      className="map"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "32px",
          fontSize: "3rem",
          color: "darkcyan",
          zIndex: "10",
          cursor: "pointer",
          userSelect: "none",
        }}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "32px",
          fontSize: "3rem",
          color: "darkcyan",
          zIndex: "10",
          cursor: "pointer",
          userSelect: "none",
        }}
      />
      <div id="maps" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Floor plans</h2>
            <p>
              We have thousands of home plan designs and blueprints to choose
              from. Free customization quotes for most house plans.
            </p>
          </div>

          {SliderData.map((slide, index) => {
            return (
              <div
                style={
                  index !== current
                    ? {
                        opacity: "0",
                        transitionDuration: "1s ease",
                      }
                    : {
                        opacity: "1",
                        transitionDuration: "1s",
                        transform: "scale(1.08)",
                      }
                }
                key={index}
              >
                {index === current && (
                  <Magnifier
                    src={slide.image}
                    className="image"
                    zoomFactor="1.5"
                    style={{
                      height: "600px",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Map;
