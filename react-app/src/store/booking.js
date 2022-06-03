const LOAD_BOOKINGS = "booking/LOAD_BOOKINGS";
const CREATE_BOOKING = "booking/CREATE_BOOKING";
const UPDATE_BOOKING = "booking/UPDATE_BOOKING";
const DELETE_BOOKING = "booking/DELETE_BOOKING";

// Action Creators
const loadBookings = (bookings) => ({
  type: LOAD_BOOKINGS,
  bookings: bookings,
});

const createBooking = (booking) => ({
  type: CREATE_BOOKING,
  booking: booking,
});

const updateBooking = (booking) => ({
  type: UPDATE_BOOKING,
  booking: booking,
});

const deleteBooking = (bookingId) => ({
  type: DELETE_BOOKING,
  bookingId: bookingId,
});

// GET Spot Booking Thunk
// ! This is in store/bookingSpots.js -- if broken use this one and delete other one
// export const loadBookingSpotThunk = (spotId) => async (dispatch) => {
//   const res = await fetch(`/api/bookings/spot/${spotId}`);

//   if (res.ok) {
//     const bookings = await res.json();
//     dispatch(loadBookings(bookings));
//   }
// };

// GET User Booking Thunk
export const loadUserBookingsThunk = (userId) => async (dispatch) => {
  const res = await fetch(`/api/bookings/user/${userId}`);

  if (res.ok) {
    const bookings = await res.json();
    dispatch(loadBookings(bookings));
  }
};

// POST Booking Thunk
export const addNewBookingThunk =
  (user_id, spot_id, check_in, check_out) => async (dispatch) => {
    const res = await fetch(`/api/bookings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        spot_id,
        check_in,
        check_out,
      }),
    });

    if (res.ok) {
      const bookingInfo = await res.json();
      dispatch(createBooking(bookingInfo));
      return ["Created", bookingInfo];
    }
  };

// PUT Booking Thunk
export const updateExistingBookingThunk =
  (booking_id, check_in, check_out) => async (dispatch) => {
    const res = await fetch(`/api/bookings/${booking_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        booking_id,
        check_in,
        check_out,
      }),
    });

    if (res.ok) {
      const bookingInfo = await res.json();
      dispatch(updateBooking(bookingInfo));
      return ["Updated", bookingInfo];
    }
  };

// DELETE Booking Thunk
export const deleteBookingThunk = (booking_id) => async (dispatch) => {
  const res = await fetch(`/api/bookings/${booking_id}`, {
    method: "DELETE",
    body: JSON.stringify({ booking_id }), // might not be needed
  });

  if (res.ok) {
    dispatch(deleteBooking(booking_id));
  }
};

const initialState = { bookings: null };

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS:
      const allBookings = {};

      for (let booking of action.bookings.bookings) {
        allBookings[booking.id] = booking;
      }
      // might need to add ...state to this
      return { ...allBookings };

    case CREATE_BOOKING:
      return {
        ...state,
        [action.booking.id]: action.booking,
      };

    case UPDATE_BOOKING:
      return {
        ...state,
        [action.booking.id]: action.booking,
      };

    case DELETE_BOOKING:
      const newState = { ...state };
      delete newState[action.bookingId];
      return newState;

    default:
      return state;
  }
};

export default bookingsReducer;
