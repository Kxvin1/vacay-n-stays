import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookingCard from "./BookingCard";

import "./BookingsContainer.css";

function BookingsContainer({ bookings, user }) {
  const [prevShow, setPrevShow] = useState(false);
  const [oldBookings, setOldBookings] = useState([]);
  const [newBookings, setNewBookings] = useState([]);

  useEffect(() => {
    if (bookings[0] === null) {
      return;
    }

    const oldBookingsArray = [];
    const newBookingsArray = [];

    let today = new Date();

    for (let booking of bookings) {
      let check_in = new Date(booking.check_in.slice(5, 16));
      if (check_in < today) {
        oldBookingsArray.push(booking);
      } else {
        newBookingsArray.push(booking);
      }
    }

    oldBookingsArray.sort((a, b) => a.check_in - b.check_in);

    newBookingsArray.sort((a, b) => b.check_in - a.check_in);

    setOldBookings(oldBookingsArray);
    setNewBookings(newBookingsArray);
  }, [bookings]);

  return (
    <>
      <div>
        <div className="bookings-container-nav-header">
          <div className="bookings-container-nav-profile">
            <h3
              id={!prevShow ? "bookings-underlined" : null}
              onClick={() => setPrevShow(false)}
            >
              Upcoming Trips
            </h3>
            <h3
              id={prevShow ? "bookings-underlined" : null}
              onClick={() => setPrevShow(true)}
            >
              Where You've Been
            </h3>
          </div>
        </div>
      </div>
      <div className="bookings-container-for-user">
        {!prevShow && (
          <>
            {newBookings.length === 0 ? (
              <div className="bookings-container-center-this">
                <div className="no-bookings-body-text">
                  <h1>No trips booked... yet!</h1>
                  <h3>
                    Time to dust off your bags and start planning your next
                    adventure.
                  </h3>
                  <button className="start-searching-button">
                    <Link to={"/"}>Start searching</Link>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bookings-not-empty-component">
                {newBookings.map((booking, index) => (
                  <BookingCard
                    user={user}
                    booking={booking}
                    upcoming={true}
                    key={`Your-booking-${booking.spot.id}-${index}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
        {prevShow && (
          <>
            {oldBookings.length === 0 ? (
              <div className="bookings-container-center-this">
                <div className="no-bookings-body-text">
                  <h1>No trips booked... yet!</h1>
                  <h3>
                    Time to dust off your bags and start planning your next
                    adventure.
                  </h3>
                  <button className="start-searching-button">
                    <Link to={"/"}>Start searching</Link>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bookings-not-empty-component">
                {oldBookings.map((booking, index) => (
                  <BookingCard
                    booking={booking}
                    upcoming={false}
                    key={`Your-past-bookings-${booking.spot.id}-${index}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default BookingsContainer;
