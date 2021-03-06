import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import usePlacesAutocomplete from "use-places-autocomplete";

export default function Map(props) {
  // const [address, setAddress] = React.useState("");
  // const [coordinates, setCoordinates] = React.useState({
  //   lat: null,
  //   lng: null,
  // });

  const { clearSuggestions } = usePlacesAutocomplete();

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    props.setAddress(value);
    props.setCoordinates(latlng);
    clearSuggestions();
  };
  return (
    <PlacesAutocomplete
      value={props.address}
      onChange={props.setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
        return (
          <div className="search-container">
            <input
              {...getInputProps({ placeholder: "Type address" })}
              className="search-input"
              required
            />
            <div>
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { style })}
                    // onClick={() => handleSelect(suggestion.description)}
                    onSelect={() => handleSelect(suggestion.description)}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </PlacesAutocomplete>
  );
}
