import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadSpotReviews } from "../../store/reviews";
import { addNewBookingThunk } from "../../store/booking";
import { getSpots } from "../../store/spots";
import Reviews from "../Reviews/Reviews";
import DatePicker from "react-calendar";

import "./SpotDetailPage.css";

export default function SpotDetailPage() {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const user = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots[spotId]);
  const reviews = useSelector((state) => Object.values(state.reviews));

  const [date, setDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState();

  useEffect(() => {
    dispatch(getSpots(spotId));
    dispatch(loadSpotReviews(spotId));
  }, [dispatch, spotId]);

  useEffect(() => {
    if (date) {
      const displayDate = `${
        date[0].getMonth() + 1
      }/${date[0].getDate()}/${date[0].getFullYear()} - ${
        date[1].getMonth() + 1
      }/${date[1].getDate()}/${date[1].getFullYear()}`;
      setFormattedDate(displayDate);
    }
  }, [date]);

  const handleBooking = async (e) => {
    e.preventDefault();

    const data = await dispatch(
      addNewBookingThunk(user.id, spotId, date[0], date[1])
    );
  };

  return (
    <div className="spot_detail_main_container">
      <h1>{spot?.name}</h1>
      <div
        className="spot_image_container"
        style={{ backgroundImage: `url(${spot?.images[0]})` }}
      ></div>
      <div className="spot_detail_container">
        <div className="spot_address">
          {spot?.address.length > 40 ? (
            <h4>{spot?.address}</h4>
          ) : (
            <h3>
              {spot?.address} {spot?.city} {spot?.state}
            </h3>
          )}
        </div>
        <div className="description">{spot?.description}</div>
        <div className="images_container">
          {spot?.images.map((image) => (
            <img className="image" src={image} />
          ))}
        </div>
      </div>
      <div className="action_container">
        <div className="spot_mod_btns">
          <button>Delete</button>
          <button>Edit</button>
        </div>
        <div className="booking_container">
          <h2>Booking</h2>
          <form method="post" action={handleBooking}>
            <DatePicker
              onChange={(picked) => setDate(picked)}
              value={date}
              view={"month"}
              showFixedNumberOfWeeks={true}
              prev2Label={null}
              next2Label={null}
              returnValue="range"
              selectRange={true}
            />
            <input type="text" value={formattedDate} placeholder="Add date" />
            <button type="Submit">Book</button>
          </form>
        </div>
        <div></div>
      </div>
      <div className="reviews_container">
        <h2>Reviews</h2>
        <Reviews spotId={spotId} reviews={reviews} user={user} />
      </div>
    </div>
  );
}
