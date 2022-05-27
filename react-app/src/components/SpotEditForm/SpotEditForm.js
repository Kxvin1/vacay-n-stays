import React, { useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Map from "../SpotForm/Map";
import { editSpot } from "../../store/spots";
import "./SpotEditForm.css";

export default function SpotEditForm() {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const history = useHistory();

  // array of user's spots.
  const userSpots = useSelector((state) => Object.values(state.yourSpots));

  const user = useSelector((state) => {
    return state.session.user;
  });

  const spotToEdit = userSpots.find((spot) => {
    return spot.id.toString() === spotId;
  });

  const [user_id, setUserId] = useState(spotToEdit?.user_id);
  const [name, setName] = useState(spotToEdit?.name);
  const [description, setDescription] = useState(spotToEdit?.description);
  const [address, setAddress] = useState(spotToEdit?.address);
  const [city, setCity] = useState(spotToEdit?.city);
  const [state, setState] = useState(spotToEdit?.state);
  const [country, setCountry] = useState(spotToEdit?.country);
  const [coordinates, setCoordinates] = useState({
    lat: spotToEdit?.lat,
    lng: spotToEdit?.lng,
  });
  const [price, setPrice] = useState(spotToEdit?.price);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationErrors.length > 0) {
      return;
    }

    const data = {
      user_id: user.id,
      name,
      description,
      address,
      city,
      state,
      country,
      lat: coordinates.lat,
      lng: coordinates.lng,
      price,
    };

    if (data) {
      dispatch(editSpot(data, spotToEdit.id));
    }
  };

  return (
    <div className="spot_form_container">
      <div className="spot_form_content">
        {" "}
        <form className="spot_form" onSubmit={handleSubmit}>
          <div className="spot_name_container_input">
            <label>Name:</label>
            <input
              name="name"
              type="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          <div className="spot_description_input">
            <label>Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="spot_address_input">
            <label>Address:</label>
            <Map
              setCoordinates={setCoordinates}
              setAddress={setAddress}
              coordinates={coordinates}
              address={address}
            />
          </div>
          <div className="spot_city_input">
            <label>City:</label>
            <input
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></input>
          </div>
          <div className="spot_state_input">
            <label>State:</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="spot_state_select"
            >
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
          {/* <div className="spot_country_input">
        <label>Country:</label>
        <input
          name="country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        ></input>
      </div> */}
          <div className="spot_price_input">
            <label>Price $:</label>
            <input
              class="spot_price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="spot_button_div">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
