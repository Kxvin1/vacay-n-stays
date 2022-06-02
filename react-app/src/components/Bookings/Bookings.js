import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUserBookingsThunk } from "../../store/booking";

import BookingsContainer from "./BookingsContainer";
import "./Bookings.css";

function Bookings() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => Object.values(state.bookings));

  const [loaded, setLoaded] = useState(false);

  // console.log(bookings, "bookings use selector state.bookings");

  bookings.sort((a, b) => b?.id - a?.id);

  useEffect(() => {
    dispatch(loadUserBookingsThunk(user?.id)).then(setLoaded(true));

    return () => {
      setLoaded();
    };
  }, [dispatch, user]);

  return (
    <div className="bookings-container-container">
      {loaded && (
        <div className="bookings-container">
          <h1>Your Bookings</h1>
          <BookingsContainer bookings={bookings} user={user} />
        </div>
      )}
    </div>
  );
}

export default Bookings;
