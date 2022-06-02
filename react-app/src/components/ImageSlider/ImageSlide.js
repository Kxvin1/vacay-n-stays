import React from "react";
import { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

import "./ImageSlide.css";

function ImageSlide({ spot }) {
  const imageArray = Object.values(spot.images);

  const [proxyHoverState, setHoverState] = useState(false);

  let arrowState = false;

  if (proxyHoverState) {
    arrowState = true;
  }

  const properties = {
    transitionDuration: 1000,
    easing: "linear",
    indicators: true,
    arrows: arrowState,
    autoplay: false,
    cssClass: "ImageSlide",
  };

  return (
    <div
      id="container-image-slide-id"
      className="container-image-slide"
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <Fade {...properties}>
        {imageArray.map((image) => (
          <Link to={`/spots/${spot.id}`} key={`Slider-${image.id}`}>
            <div
              key={`Slider-${image.id}`}
              style={{
                backgroundImage: `url(${image}), url("https://i.imgur.com/MJ5yHQw.jpg")`,
              }}
              id="single-image-slide-id"
            ></div>
          </Link>
        ))}
      </Fade>
    </div>
  );
}

export default ImageSlide;
