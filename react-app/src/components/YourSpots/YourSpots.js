import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserSpots } from "../../store/your_spots";
import { deleteSpotId } from "../../store/spots";
import ImageSlide from "../ImageSlider/ImageSlide";
import mapStyles from "../mapStyles";
import spotMarkerSmall from "../SearchDisplay/spot-marker-small.png";

import "./YourSpots.css";

import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  styles: mapStyles,
};

export default function YourSpots() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [latitudeAvg, setLatitudeAvg] = useState(39.5);
  const [longitudeAvg, setLongitudeAvg] = useState(-98.35);
  const [zoom, setZoom] = useState(4);
  const [click, setClick] = useState(false);
  const [deleteAvailable, setDeleteAvailable] = useState(false);
  const [spotDelete, setSpotDelete] = useState({});
  const [spotInfo, setInfoSpot] = useState({});

  // Get an array of user's spots
  const spots = useSelector((state) => Object.values(state?.yourSpots));
  const user = useSelector((state) => state.session.user);

  spots.sort(function (a, b) {
    return b.id - a.id;
  });

  useEffect(() => {
    dispatch(getUserSpots(user.id));
    // let latitude = 0;
    // let longitude = 0;

    // spots.forEach((spot) => {
    //   latitude += spot?.lat;
    //   longitude += spot?.lng;
    // });

    // const length = spots?.length;
    // setLatitudeAvg(parseFloat(latitude / length));
    // setLongitudeAvg(parseFloat(longitude / length));
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

  const panTo = (spot) => {
    // this centers the spot.
    setLatitudeAvg(spot.lat);
    setLongitudeAvg(spot.lng);
    // setting zoom to the spot
    setZoom(15);
  };

  const reCenter = () => {
    setLatitudeAvg(39.5);
    setLongitudeAvg(-98.35);
    // zooms out
    setZoom(4);
  };

  const infoSpot = (spot) => {
    setInfoSpot(spot);
    setClick(!click);
  };

  return (
    <div className="main_content_your_spots">
      <div className="your_spots_list">
        <div className="your_spots_header_div">
          <h1 className="your_spots_header">Your Spots</h1>
        </div>
        {spots?.map((spot) => {
          return (
            <div className="your_spot_container" key={`your_spot_${spot?.id}`}>
              {/* Will add spotSlide component, pass in spot={spot} key={`spot_slide_${spot.id}`} */}
              <ImageSlide spot={spot} key={`your_spot_${spot?.id}`} />
              <div className="your_spot_info" onClick={() => panTo(spot)}>
                <div className="your_spot_name">{spot?.name}</div>
                <div className="your_spot_information">
                  <div className="spotPrice">${spot?.price}/night</div>
                  <div className="pan-to-container">
                    <div class="pan-to-button" onClick={() => panTo(spot)}>
                      Click to view on map
                    </div>
                  </div>
                  <div className="search-spot-card-info">
                    <div className="spotDescription">{spot?.description}</div>
                  </div>

                  <div className="search-spot-card-info">
                    <div>Location: {`${spot?.city}, ${spot?.state}`}</div>
                  </div>
                </div>
                <div className="your_spot_button_container">
                  <button
                    className="your_spot_edit_button"
                    onClick={() => toEditPage(spot.id)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    class="your_spot_delete_button"
                    onClick={(e) => showDeleteConfirmation(e, spot)}
                  >
                    <i className="fas fa-trash"></i>
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
          zoom={zoom}
          options={options}
        >
          <button className="recenter_button" onClick={reCenter}>
            Recenter
          </button>
          {spots?.map((spot) => (
            <>
              <Marker
                key={`${spot?.id}`}
                icon={{
                  url: spotMarkerSmall,
                }}
                position={{ lat: spot?.lat, lng: spot?.lng }}
                label={{ text: `$${spot?.price}`, fontWeight: "bold" }}
                onClick={() => infoSpot(spot)}
              ></Marker>
            </>
          ))}
          {click && (
            <div className="info_container">
              <InfoWindow
                position={{
                  lat: spotInfo?.lat,
                  lng: spotInfo?.lng,
                }}
                className="info_window"
              >
                <div className="your_spot_slide_div">
                  <ImageSlide
                    spot={spotInfo}
                    key={`your_spot_info${spotInfo?.id}`}
                  ></ImageSlide>
                  <div className="info_window_slide_info">
                    <div className="info_window_name">
                      {spotInfo?.name}
                      <span className="perNightSpan">
                        {" "}
                        -- {`${spotInfo?.city}, ${spotInfo?.state}`}
                      </span>
                    </div>
                    <div className="info_window_price">
                      <span className="perNightSpan">Host: </span>
                      {spotInfo?.user.first_name} {spotInfo?.user.last_name}
                    </div>
                    <div className="info_window_price">
                      ${spotInfo?.price}
                      <span className="perNightSpan"> night</span>
                    </div>
                  </div>
                </div>
              </InfoWindow>
            </div>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
