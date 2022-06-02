import React from "react";
import { useState } from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

import "./ImageSlide.css";

function ImageSlide({ spot }) {
  const imageArray = Object.values(spot.images);

  const [proxyHoverState, setHoverState] = useState(false);
  const [hoverAutoPlay, setHoverAutoPlay] = useState(false);

  let arrowState = false;
  let autoplayStarter = false;

  if (proxyHoverState || hoverAutoPlay) {
    arrowState = true;
    autoplayStarter = true;
  }

  const hoverStateSetterEnter = () => {
    setHoverAutoPlay(true);
    setHoverState(true);
  };

  const hoverStateSetterExit = () => {
    setHoverAutoPlay(false);
    setHoverState(false);
  };

  const properties = {
    duration: 2500,
    transitionDuration: 350,
    easing: "ease-out",
    indicators: true,
    arrows: arrowState,
    autoplay: autoplayStarter,
    pauseOnHover: false,
    cssClass: "ImageSlide",
  };

  return (
    <div
      id="container-image-slide-id"
      className="container-image-slide"
      // onMouseEnter={() => setHoverState(true) && setHoverAutoPlay(true)}
      // onMouseLeave={() => setHoverState(false) && setHoverAutoPlay(false)}
      onMouseEnter={() => hoverStateSetterEnter()}
      onMouseLeave={() => hoverStateSetterExit()}
    >
      <Slide {...properties}>
        {imageArray.map((image) => (
          <Link to={`/spots/${spot.id}`} key={`Slider-${image.id}`}>
            <div
              key={`Slider-${image.id}`}
              style={{
                backgroundImage: `url(${image}), url("https://i.imgur.com/MJ5yHQw.jpg")`,
              }}
              id="single-image-slide-id"
              className="container-image-slide"
            ></div>
          </Link>
        ))}
      </Slide>
    </div>
  );
}

export default ImageSlide;
