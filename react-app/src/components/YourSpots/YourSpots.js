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
  const [deleteAvailable, setDeleteAvailable] = useState(false);
  const [spotDelete, setSpotDelete] = useState({});

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

  const showDeleteConfirmation = (e, spot) => {
    e.preventDefault();
    setDeleteAvailable(true);
    setSpotDelete(spot);
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
                  <div className="spotAddress">{spot?.address}</div>
                  <div className="spotDescription">{spot?.description}</div>
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
                    class="your_spot_delete_button"
                    onClick={(e) => showDeleteConfirmation(e, spot)}
                  >
                    Delete Spot
                  </button>
                  {deleteAvailable && (
                    <div className="delete-spot-modal">
                      <div className="delete-booking-form">
                        <div className="delete-confirmation-modal">{`Are you sure you want to delete ${spotDelete.name}?`}</div>
                        <div className="delete-booking-confirm-buttons">
                          <div
                            class="delete-button"
                            onClick={() => toDelete(spotDelete.id)}
                          >
                            Delete Spot
                          </div>
                          <div
                            class="cancel-button"
                            onClick={() => setDeleteAvailable(false)}
                          >
                            Go Back
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
