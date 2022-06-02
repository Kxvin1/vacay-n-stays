import React, { useState, useEffect } from "react";
import ImageSlide from "../ImageSlider/ImageSlide";
import { useSelector } from "react-redux";
import star from "../YourSpots/svgexport-12.png";

import "./Spots.css";

export default function SpotContainer({ spots }) {
  // Object of userList
  const userList = useSelector((state) => state.userList);
  const [hoverState, setHoverState] = useState(false);

  const avgRating = (spot) => {
    let cleanS = spot.cleanSum;
    let locS = spot.locSum;
    let valueS = spot.valueSum;

    let cleanL = spot.cleanLen;
    let locL = spot.locLen;
    let valueL = spot.valueLen;

    const cleanAvg = cleanS / cleanL;
    const locAvg = locS / locL;
    const valueAvg = valueS / valueL;

    const totalAvg = (cleanAvg + locAvg + valueAvg) / 3;

    if (!totalAvg) {
      return 0;
    }

    return totalAvg.toFixed(2).toString();
  };

  return (
    <div className="all_spots_container">
      {spots?.map((spot) => {
        return (
          <div className="spot_image_slide_div">
            <ImageSlide spot={spot} key={`all_spot_${spot?.id}`} />
            <div className="spot_info_main_container">
              <div className="spot_name">
                {spot?.name}
                <div clasName="spot_star_cont">
                  <div className="star_rating_container">
                    <div className="info_window_star">
                      <img
                        src={star}
                        style={{
                          width: "0.8em",
                          height: "0.8em",
                          marginRight: "0.25em",
                        }}
                      ></img>
                    </div>
                    <div clasName="spot_main_avg_rating">
                      <span clasName="spot_main_avg_rating">
                        {avgRating(spot)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spot_city_rating">
                <div className="spot_city">City: {spot?.city}</div>
              </div>

              <div className="spot_host">
                Hosted by: {spot?.user.first_name} {spot?.user.last_name}
              </div>
              <div className="spot_price" style={{ fontWeight: "bold" }}>
                ${spot?.price}
                <span style={{ fontWeight: "lighter" }}>/night</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
