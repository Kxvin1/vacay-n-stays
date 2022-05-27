const LOAD = "bookingSpot/LOAD_BOOKINGS";

//  action (actions return an object)
const loadSpotBookings = (bookings) => ({
  type: LOAD,
  bookings: bookings,
});

// thunk (thunks return a function)
export const loadSpotBookingsThunk = (spotId) => async (dispatch) => {
  const res = await fetch(`/api/bookings/spot/${spotId}`);

  if (res.ok) {
    const bookings = await res.json();
    dispatch(loadSpotBookings(bookings));
  }
};

// set to null
const initialState = { bookingSpots: null };

// reducer for LOAD case

const bookingSpotReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allBookings = {};

      //   action.bookings is an object = {"bookings": res}
      //   action.bookings.bookings is an array. res = [booking.to_dict() for booking in bookings]
      for (let booking of action.bookings.bookings) {
        allBookings[booking.id] = booking;
      }
      return { ...allBookings };
    default:
      return state;
  }
};

export default bookingSpotReducer;
