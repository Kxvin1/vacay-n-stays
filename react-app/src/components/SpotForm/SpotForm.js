import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSpot, uploadFile } from "../../store/spots";
import Map from "./Map";
import ImageUploading from "react-images-uploading";

import "./SpotForm.css";

import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

export default function SpotForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const latestSpot = useSelector((state) => Object.values(state?.spots));

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [price, setPrice] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);

  const [images, setImages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validationErrors.length > 0) {
      return;
    }

    if (images.length < 3) {
      return;
    }

    if (coordinates.lat === null || coordinates.lng === null) {
      window.alert("Invalid address, please select one of the options listed.");
      return;
    }

    let cleanImages = images.map((image) => image.file);

    const data = {
      user_id: user.id,
      name,
      description,
      address,
      city,
      state,
      country: "USA",
      price,
      lat: coordinates.lat,
      lng: coordinates.lng,
    };

    const spotData = await dispatch(
      addSpot(
        user.id,
        name,
        description,
        address,
        city,
        state,
        country,
        price,
        coordinates.lat,
        coordinates.lng
      )
    );

    await addImages(cleanImages, spotData[1].id);
    window.alert("Successful post.");
    history.push("/");
  };

  useEffect(() => {
    const errors = [];
    // if (!name.length) errors.push("Please include a name for your Spot.");
    // if (!description.length)
    //   errors.push("Please include a description for your Spot.");
    // if (!address.length)
    //   errors.push("Please include an address for your Spot.");
    if (images.length < 3) errors.push("Please include at least 3 images");
    // if (!state.length) errors.push("Please include the state for your Spot.");
    // if (!country.length) errors.push("Please include Country for your Spot.");
    setValidationErrors(errors);
  }, [name, description, address, city, state, country, images]);

  async function getCoordinates(address) {
    // value of address is the valid address...
    const res = await getGeocode({ address: address });
    const { lat, lng } = await getLatLng(res[0]);

    if (!res) {
      return;
    }
  }

  const addImages = async (images, spot_id) => {
    for (let x = 0; x < images.length; x++) {
      const obj = {
        file: images[x],
        spot_id: spot_id,
        newFile: true,
      };

      await dispatch(uploadFile(obj));
    }

    // history.push(`/spots/${spot_id}`);
  };
  return (
    <div className="spot_form_container">
      <div className="spot_form_content">
        {" "}
        <form className="spot_form" onSubmit={handleSubmit}>
          <div className="spot_form_input_container">
            <div className="spot_form_field_container">
              <div className="spot_input_main_container">
                <h3>Add a Spot:</h3>
                <div className="spot_name_container_input spot_input">
                  <label className="label">Name:</label>
                  <input
                    name="name"
                    type="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></input>
                </div>
                <div className="spot_description_input spot_input">
                  <label className="label">Description:</label>
                  <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="spot_address_input spot_input">
                  <label className="label">Address:</label>
                  <Map
                    setCoordinates={setCoordinates}
                    setAddress={setAddress}
                    coordinates={coordinates}
                    address={address}
                  />
                </div>
                <div className="spot_city_input spot_input">
                  <label className="label">City:</label>
                  <input
                    name="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  ></input>
                </div>
                <div className="spot_state_input spot_input">
                  <label className="label">State:</label>
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
                <div className="spot_price_input spot_input">
                  <label className="label">Price/night:</label>
                  <input
                    class="spot_price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="form_input_section" id="imageUploadSection">
                <div className="field_section_container">
                  <h3 className="imagesHeader">Images</h3>
                  <div className="error_container_div">
                    <ul className="error_container">
                      {validationErrors.length > 0 &&
                        validationErrors.map((error) => (
                          <li
                            className="error"
                            key={error}
                            style={{ color: "red" }}
                          >
                            {error}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="imageUploadContainer">
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={(imageList) => setImages(imageList)}
                      maxNumber={20}
                      dataURLKey="data_url"
                      acceptType={["jpg", "png", "jpeg"]}
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        <div className="upload__image-wrapper">
                          <div
                            style={
                              isDragging
                                ? { color: "rgb(192, 53, 22)" }
                                : undefined
                            }
                            onClick={onImageUpload}
                            {...dragProps}
                            className="add_images_container"
                          >
                            Click or Drag Images Here
                          </div>
                          {/* <div onClick={onImageRemoveAll}>Remove all images</div> */}
                          <div className="images_container">
                            {imageList.map((image, index) => (
                              <div key={index}>
                                <img
                                  src={image["data_url"]}
                                  alt=""
                                  height="230"
                                />
                                <div className="editPhotoButtons">
                                  <div
                                    className="change_image"
                                    onClick={() => onImageUpdate(index)}
                                  >
                                    Change
                                  </div>
                                  <div
                                    className="remove_image"
                                    onClick={() => onImageRemove(index)}
                                  >
                                    Remove
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </ImageUploading>
                  </div>
                </div>
              </div>
            </div>
            <div className="spot_button_div">
              <button className="spot_form_button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
