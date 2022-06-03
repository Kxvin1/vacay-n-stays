import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import DatePicker from "react-calendar";

import { deleteBookingThunk } from "../../store/booking";
import { loadSpotBookingsThunk } from "../../store/bookingSpot";

import "./BookingCard.css";

function BookingCard({ booking, upcoming, user }) {
  const dispatch = useDispatch();

  const [deleteAvailable, setDeleteAvailable] = useState(false);

  const showDeleteConfirmation = (e) => {
    e.preventDefault();
    setDeleteAvailable(true);
  };

  const deleteBooking = () => {
    dispatch(deleteBookingThunk(booking.id));
    setDeleteAvailable(false);
  };

  const checkInDate = () => {
    const dateFromDb = booking?.check_in?.split(" ");
    const formattedDate = [];

    formattedDate.push(dateFromDb[0]);
    formattedDate.push(dateFromDb[2]);

    formattedDate.push(dateFromDb[1]);
    formattedDate.push(`${dateFromDb[3]}`);
    return formattedDate.join(" ");
  };

  const checkOutDate = () => {
    const dateFromDb = booking?.check_out?.split(" ");
    const formattedDate = [];
    formattedDate.push(dateFromDb[0]);
    formattedDate.push(dateFromDb[2]);
    formattedDate.push(dateFromDb[1]);
    formattedDate.push(`${dateFromDb[3]}`);
    return formattedDate.join(" ");
  };

  const spotDescriptionText = () => {
    const description = booking?.spot?.description;
    const finalResult = [];
    if (description?.length > 350) {
      let newDescription = description.slice(0, 350);
      finalResult.push(newDescription);
      finalResult.push("...");
    } else {
      finalResult.push(description);
    }
    return finalResult;
  };

  const checkInDateFormatted = checkInDate();
  const checkOutDateFormatted = checkOutDate();
  const spotDescription = spotDescriptionText();

  return (
    <div className="booking-card-outer-container">
      <Link to={`/spots/${booking?.spot?.id}`}>
        <div className="spot-booking-card">
          <div className="booking-date">Your Trip Dates:</div>
          <div className="booking-date">
            {checkInDateFormatted} - {checkOutDateFormatted}
          </div>
          <div className="specific-booking-info-card">
            <div
              className="booking-picture"
              // style={{ backgroundImage: `url(${booking?.spot?.images[0]})` }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={booking?.spot?.images[0]}
                alt="single-slide"
              />
            </div>
            <div className="booking-spot-info">
              <div className="booking-spot-info-container-center">
                <div className="booking-confirmed-details">
                  <div className="booking-confirmed-details-header">
                    Booking Info:
                  </div>
                  <div className="booking-confirmed-details-info">
                    {booking?.spot?.name}
                  </div>
                </div>
                <div
                  className="booking-confirmed-details"
                  id="booking-details-container-id"
                >
                  <div
                    className="booking-confirmed-details-header"
                    id="booking-location-id"
                  >
                    Address:
                  </div>
                  <div className="booking-confirmed-details-info">{`${booking?.spot?.address}`}</div>
                </div>
                <div
                  className="booking-confirmed-details"
                  id="booking-details-container-id"
                >
                  <div
                    className="booking-confirmed-details-header"
                    id="booking-location-id"
                  >
                    Location:
                  </div>
                  <div className="booking-confirmed-details-info">
                    {spotDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {upcoming && (
            <div className="get-directions-booking-page-button">
              <Link to={`/directions/${booking?.spot?.id}`}>
                <div className="get-directions-booking-button-inner">
                  Get Directions
                </div>
              </Link>
            </div>
          )}
          {upcoming && (
            <div className="delete-booking-page-button">
              <div
                className="delete-booking-button-inner"
                onClick={showDeleteConfirmation}
              >
                <i className="fas fa-trash"></i>
                {/* Cancel Trip */}
              </div>
            </div>
          )}
        </div>
      </Link>
      {deleteAvailable && (
        <div className="delete-booking-modal">
          <div className="delete-booking-form">
            <div className="delete-confirmation-modal">{`Are you sure you want to cancel your trip at ${booking?.spot?.name} on ${checkInDateFormatted}?`}</div>
            <div className="delete-booking-confirm-buttons">
              <div class="delete-button" onClick={deleteBooking}>
                Cancel Trip
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
  );
}

export default BookingCard;
