import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserSpots } from "../../store/your_spots";
import { deleteSpotId } from "../../store/spots";
import ImageSlide from "../ImageSlider/ImageSlide";

import "./YourSpots.css";

import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export default function YourSpots() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [latitudeAvg, setLatitudeAvg] = useState(null);
  const [longitudeAvg, setLongitudeAvg] = useState(null);

  // Get an array of user's spots
  const spots = useSelector((state) => Object.values(state.yourSpots));
  const user = useSelector((state) => state.session.user);

  //will do a useEffect to grab all user's spots.
  // if (spots) {
  //   let latitude = 0;
  //   let longitude = 0;

  //   spots.forEach((spot) => {
  //     lat += spot.lat;
  //     lng += spot.lng;
  //   });

  //   const length = spots?.length;
  //   setLatitudeAvg(parseFloat(latitude / length));
  //   setLongitudeAvg(parseFloat(longitude / length));
  // }

  useEffect(() => {
    dispatch(getUserSpots(user.id));
    let latitude = 0;
    let longitude = 0;

    spots.forEach((spot) => {
      latitude += spot?.lat;
      longitude += spot?.lng;
    });

    const length = spots?.length;
    setLatitudeAvg(parseFloat(latitude / length));
    setLongitudeAvg(parseFloat(longitude / length));
  }, [dispatch]);

  const toSpotPage = (spotId) => {
    // redirect user to spotPage (detail)
    history.push(`/spots/${spotId}`);
  };

  const toEditPage = (spotId) => {
    // redirect user to editForm page
    history.push(`/spots/edit/${spotId}`);
  };

  const toDelete = (spotId) => {
    dispatch(deleteSpotId(spotId));
    window.location.reload(true);
  };

  return (
    <div className="main_content_your_spots">
      <div className="your_spots_list">
        <div>
          <h1>Your Spots</h1>
        </div>
        {spots?.map((spot) => {
          return (
            <div className="your_spot_container" key={`your_spot_${spot?.id}`}>
              {/* Will add spotSlide component, pass in spot={spot} key={`spot_slide_${spot.id}`} */}
              <ImageSlide spot={spot} key={`your_spot_${spot?.id}`} />
              <div className="your_spot_info">
                <div className="your_spot_name">{spot?.name}</div>
                <div className="your_spot_information">
                  <div className="spotPrice">${spot?.price}/night</div>
                  <div>{spot?.address}</div>
                  <div>{spot?.description}</div>
                  <div>{/* address */}</div>
                </div>
                <div className="your_spot_button_container">
                  <button
                    className="your_spot_edit_button"
                    onClick={() => toEditPage(spot.id)}
                  >
                    EDIT
                  </button>
                  <button
                    className="your_spot_delete_button"
                    onClick={() => toDelete(spot.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="your_spots_map">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{
            lat: latitudeAvg,
            lng: longitudeAvg,
          }}
          zoom={4}
        >
          {spots?.map((spot) => (
            <Marker
              key={`${spot?.id}`}
              position={{ lat: spot?.lat, lng: spot?.lng }}
              label={{ text: `$${spot?.price}` }}
              onClick={() => toSpotPage(spot?.id)}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
}
