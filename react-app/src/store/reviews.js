const LOAD = "reviews/LOAD";
const NEW_REVIEW = "reviews/NEW_REVIEW";
const EDIT_REVIEW = "reviews/EDIT_REVIEW";
const DELETE_REVIEW = "reviews/DELETE_REVIEW";

const loadReviews = (reviews) => ({
  type: LOAD,
  reviews,
});

const newReview = (review) => ({
  type: NEW_REVIEW,
  review,
});

const editReview = (review) => {
  return {
    type: EDIT_REVIEW,
    review,
  };
};

const deleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId,
  };
};

export const loadSpotReviews = (spotId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${spotId}`);
  if (res.ok) {
    const reviews = await res.json();
    dispatch(loadReviews(reviews));
  }
};

export const addNewReview =
  (user_id, spot_id, comment, cleanliness, location, value) =>
  async (dispatch) => {
    const res = await fetch("/api/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        spot_id,
        comment,
        cleanliness,
        location,
        value,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(newReview(data));
      return [data];
    } else {
      return ["Error"];
    }
  };

export const editSpotReview =
  (review_id, comment, cleanliness, location, value) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${review_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review_id,
        comment,
        cleanliness,
        location,
        value,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(editReview(data));
      return [data];
    } else {
      return ["Error"];
    }
  };

export const deleteOneReview = (reviewId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
    body: JSON.stringify({ reviewId }),
  });

  if (res.ok) {
    dispatch(deleteReview(reviewId));
    return null;
  } else {
    return ["Error"];
  }
};

let initialState = {};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const all = {};
      for (let review of action.reviews.reviews) {
        all[review.id] = review;
      }
      return { ...all };
    case NEW_REVIEW:
      return {
        ...state,
        [action.review.id]: action.review,
      };
    case EDIT_REVIEW:
      return {
        ...state,
        [action.review.id]: action.review,
      };
    case DELETE_REVIEW:
      const newState = { ...state };
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
