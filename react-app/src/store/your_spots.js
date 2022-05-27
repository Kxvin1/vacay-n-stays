const LOAD = "your-spots/LOAD";

// Action creator for getting all landmarks for a session user.
const load = (spots) => ({
  type: LOAD,
  spots: spots.spots,
});

// Thunk for getting all spots for a session user.

export const getUserSpots = (userId) => async (dispatch) => {
  const response = await fetch(`/api/spots/user/${userId}`);
  if (response.ok) {
    // json object of userSpots
    const spots = await response.json();
    dispatch(load(spots));
  }
};

const initialState = {};

const yourSpotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const userSpots = {};
      action.spots.forEach((spot) => {
        userSpots[spot.id] = spot;
      });
      return {
        ...userSpots,
      };
    default:
      return state;
  }
};

export default yourSpotsReducer;
