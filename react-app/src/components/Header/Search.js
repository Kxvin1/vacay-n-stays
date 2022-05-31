import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadSearchResultsThunk } from "../../store/search";
import { useSearch } from "../SearchContext";

import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { searchCity, setSearchCity, searchState, setSearchState } =
    useSearch();

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(loadSearchResultsThunk(searchCity, searchState));
    document.documentElement.scrollTop = 0;
    history.push("/search");
  };

  return (
    <div className="search-bar-container-main">
      <div className="search-bar-container-inner">
        <form className="search-input-fields-container" onSubmit={handleSearch}>
          <div className="search-form-inputs">
            <label>City</label>
            <input
              type="text"
              autoComplete="off"
              placeholder="Search Cities"
              maxLength="50"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
          </div>
          <div className="search-form-inputs last-search-remove-border">
            <label>State</label>
            <select
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
            >
              <option value="" disabled defaultValue>
                Which State?
              </option>
              <option value="">-</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <button type="submit" className="search-container-button-container">
            <div>
              <i className="fas fa-search"></i>
            </div>
            <div className="search-text-div-text">Search</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
