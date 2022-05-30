const LOAD_SEARCH_RESULTS = "search/LOAD_SEARCH_RESULTS";

const loadSearchResults = (spots) => ({
  type: LOAD_SEARCH_RESULTS,
  spots: spots,
});

export const loadSearchResultsThunk = (city, state) => async (dispatch) => {
  const res = await fetch(`/api/search/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      city,
      state,
    }),
  });

  if (res.ok) {
    const searchResults = await res.json();
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    // console.log(searchResults);
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    dispatch(loadSearchResults(searchResults));
    return ["Results", searchResults];
  }
};

const initialState = {};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SEARCH_RESULTS:
      const allResults = {};

      for (let spot of action.spots.spots) {
        allResults[spot.id] = spot;
      }
      return { ...allResults };
    default:
      return state;
  }
};

export default searchReducer;
