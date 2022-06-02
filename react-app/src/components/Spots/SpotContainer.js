import React, { useState, useEffect } from "react";
import ImageSlide from "../ImageSlider/ImageSlide";
import { useSelector } from "react-redux";
// TODO: import spotHolder

import "./Spots.css";

export default function SpotContainer({ spots }) {
  // Object of userList
  const userList = useSelector((state) => state.userList);
  const [hoverState, setHoverState] = useState(false);

  return (
    <div className="all_spots_container">
      {spots?.map((spot) => {
        return (
          <div className="spot_image_slide_div">
            <ImageSlide spot={spot} key={`all_spot_${spot?.id}`} />
            <div className="spot_info_main_container">
              <div className="spot_name">{spot?.name}</div>
              <div className="spot_city">City: {spot?.city}</div>
              <div className="spot_host">
                Hosted by: {spot?.user.first_name} {spot?.user.last_name}
              </div>
              <div className="spot_price" style={{ fontWeight: "bold" }}>
                ${spot?.price}
                <span style={{ fontWeight: "lighter" }}> night</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
