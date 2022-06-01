const LOAD = "spots/LOAD";
const ADD_ONE = "spots/ADD";
const EDIT = "spots/EDIT";
const DELETE = "spots/DELETE";

const load = (spots) => ({
  type: LOAD,
  spots,
});

const add = (spot) => ({
  type: ADD_ONE,
  spot,
});

const edit = (spot) => ({
  type: EDIT,
  spot,
});

const deleteSpot = (spot) => ({
  type: DELETE,
  spot,
});

// Thunk for loading spots

export const getSpots = () => async (dispatch) => {
  const response = await fetch("/api/spots");

  if (response.ok) {
    const spots = await response.json();
    dispatch(load(spots.spots));
  }
};

export const addSpot =
  (
    user_id,
    name,
    description,
    address,
    city,
    state,
    country,
    price,
    lat,
    lng
  ) =>
  async (dispatch) => {
    const response = await fetch("/api/spots", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        name,
        description,
        address,
        city,
        state,
        country: "USA",
        price,
        lat,
        lng,
      }),
    });

    if (response.ok) {
      const spot = await response.json();
      dispatch(add(spot));
      return ["Created", spot];
    }
  };

export const editSpot = (data, spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const editedSpot = await response.json();
    dispatch(edit(editedSpot));
    return ["Created", editedSpot];
  }
};

export const deleteSpotId = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(deleteSpot(data));
  }
};

export const uploadFile = (fileForm) => async (dispatch) => {
  const { spot_id, file, newFile } = fileForm;

  const form = new FormData();
  form.append("file", file);
  form.append("spot_id", spot_id);
  form.append("newFile", newFile);

  console.log("before");
  const res = await fetch("/api/spots/images", {
    method: "POST",
    body: form,
  });
};

// reducers.

const initialState = {};

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allSpots = {};
      action.spots.forEach((spot) => {
        allSpots[spot.id] = spot;
      });
      // May need to remove ...state will test.
      return {
        ...state,
        ...allSpots,
      };
    case ADD_ONE:
      const newState = {
        ...state,
        [action.spot.id]: action.spot,
      };
      return newState;
    case EDIT:
      const editState = {
        ...state,
        [action.spot.id]: action.spot,
      };
      return editState;
    case DELETE: {
      const newState = {
        ...state,
      };
      delete newState[action.spot.id];
      return newState;
    }
    default:
      return state;
  }
};

export default spotReducer;
