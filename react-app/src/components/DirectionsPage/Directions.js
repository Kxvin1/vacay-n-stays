import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSpots } from "../../store/spots";

import "./Directions.css";

import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";

import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// const center = { lat: 48.8584, lng: 2.3522 };

export default function Directions() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [center, setCenter] = useState({
    lat: 39.5,
    lng: -98.35,
  });

  const spot = useSelector((state) => state.spots[spotId]);

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch, spotId]);

  //get spotId by useParams
  //get Spot address via useSelector
  //set destinationRef to address

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    // destinationRef.current.value = "";
  }

  async function getCoordinates() {
    const res = await getGeocode({ address: destinationRef.current.value });
    const { lat, lng } = await getLatLng(res[0]);

    // console.log(lat, lng);
  }
  return (
    <>
      <div className="main_content_directions">
        <div className="directions_input_container">
          <div>
            <div className="directions_main_container">
              <div className="directions_distance_container">
                <h2>Distance to spot: {distance}</h2>
              </div>
              <div className="directions_duration_container">
                <h2>By driving: {duration}</h2>
              </div>
              <div>
                <Link to={`/spots/${spot.id}`}>
                  Click here to go back to spot detail page.
                </Link>
              </div>
            </div>

            <div className="input_div">
              <div className="origin_div">Origin: </div>
              <Autocomplete>
                <input ref={originRef}></input>
              </Autocomplete>
              <Autocomplete>
                <input
                  ref={destinationRef}
                  value={spot?.address}
                  className="directions_destination_input"
                ></input>
              </Autocomplete>
            </div>
            <div className="button_container">
              <div>
                <button
                  className="button_calculate"
                  onClick={(e) => {
                    calculateRoute();
                    getCoordinates();
                  }}
                >
                  CALCULATE
                </button>
              </div>
              <div>
                <button onClick={clearRoute} className="button_clear">
                  CLEAR
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100rem", height: "800px" }}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={4}
          >
            {directionsResponse && (
              <DirectionsRenderer
                directions={directionsResponse}
              ></DirectionsRenderer>
            )}
          </GoogleMap>
        </div>
      </div>
    </>
  );
}
