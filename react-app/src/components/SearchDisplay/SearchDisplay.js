import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ImageSlide from "../ImageSlider/ImageSlide";
import { getUserSpots } from "../../store/your_spots";

import "./SearchDisplay.css";

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

function SearchDisplay() {
  const spots = useSelector((state) => Object.values(state.search));
  const [isLoaded] = useState(true);

  //   console.log(spots);

  const dispatch = useDispatch();
  const history = useHistory();
  const [latitudeAvg, setLatitudeAvg] = useState(null);
  const [longitudeAvg, setLongitudeAvg] = useState(null);

  const user = useSelector((state) => state.session.user);

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
  }, [dispatch, spots.length]);

  const toSpotPage = (spotId) => {
    // redirect user to spotPage (detail)
    history.push(`/spots/${spotId}`);
  };

  return (
    <>
      {isLoaded && (
        <div className="search-spots-container">
          {spots?.length > 0 && spots[0] !== null && (
            <div className="search-spots-and-map-container">
              <div className="search-spot-list">
                <div className="search-spots-container-inner">
                  {spots?.length === 1 ? (
                    <h1>{`Search Results - 1 spot Found`}</h1>
                  ) : (
                    <h1>{`Search Results - ${spots?.length} Spots Found`}</h1>
                  )}
                </div>
                {spots?.map((spot) => (
                  <div
                    className="search-spot-single-container"
                    key={`spot_container_search_${spot?.id}`}
                  >
                    <ImageSlide spot={spot} key={`specific_spot_${spot?.id}`} />
                    <div className="spot-container-single-info">
                      <div className="search-single-spot-name">
                        Vacation Spot: {spot?.name}
                      </div>
                      <div className="search-single-spot-price">
                        Price: ${spot?.price}/night
                      </div>
                      <div className="search-spot-details-no-extra search-spot-details-holder">
                        <div className="search-spot-card-info">
                          <div className="search-spot-info-single">
                            {spot?.description.slice(0, 250) + "..."}
                          </div>
                        </div>
                        <div className="search-spot-card-info">
                          <div>Location: {`${spot?.city}, ${spot?.state}`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="search-spot-map">
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
          )}
          {spots.length === 0 && (
            <div className="search-spots-and-map-container">
              <div className="search-spot-list">
                <div className="search-spots-container-inner">
                  <h1>No Search Results</h1>
                </div>
              </div>
              <div className="search-spot-map">
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
          )}
        </div>
      )}
    </>
  );
}

export default SearchDisplay;
