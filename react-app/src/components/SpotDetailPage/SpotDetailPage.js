import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadSpotReviews } from "../../store/reviews";
import { getSpots } from "../../store/spots";
import Reviews from "../Reviews/Reviews"

import "./SpotDetailPage.css";

export default function SpotDetailPage() {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const user = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots[spotId]);
  const reviews = useSelector((state) => Object.values(state.reviews));
console.log(reviews)

  useEffect(() => {
    dispatch(getSpots(spotId));
    dispatch(loadSpotReviews(spotId));
  }, [dispatch, spotId])

  return (
    <div className="spot_detail_main_container">
      <h1>{spot?.name}</h1>
      <div
        className="spot_image_container"
        style={{ backgroundImage: `url(${spot?.images[0]})` }}
      ></div>
      <div className="spot_detail_container">
        <div className="spot_address">
          {spot?.address.length > 40 ? <h4>{spot?.address}</h4> : <h3>{spot?.address} {spot?.city} {spot?.state}</h3>}
        </div>
        <div className="description">
          {spot?.description}
        </div>
        <div className="images_container">
          {spot?.images.map(image => (
              <img className="image" src={image} />

          ))}
        </div>
      </div>
      <div className="action_container">
        <div className="spot_mod_btns">
          <button>Delete</button><button>Edit</button>          
        </div>
        <div className="booking_container">
          <h2>Booking</h2>
        </div>
      </div>
      <div className="reviews_container">
        <h2>Reviews</h2>
        <Reviews spotId={spotId} reviews={reviews} user={user} />
      </div>
    </div>
  );
}
