import React, { useEffect, useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Map from "../SpotForm/Map";
import { editSpot, uploadFile } from "../../store/spots";
import ImageUploading from "react-images-uploading";
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
  const [images, setImages] = useState("");

  useEffect(() => {
    let images = spotToEdit?.images.map((image) => {
      return { data_url: image };
    });
    setImages(images);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validationErrors.length > 0) {
      return;
    }

    if (images.length < 3) {
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

    const spotData = await dispatch(editSpot(data, spotToEdit.id));

    await addImages(images, spotData[1].id);
    window.alert("Successful edit.");
    history.push(`/spots/${spotData[1].id}`);
  };

  const addImages = async (images, spot_id) => {
    for (let x = 0; x < images.length; x++) {
      let image = images[x];

      let newFile = false;
      let file;

      //If there is a file, this is a new/updated upload
      if (image.file) {
        newFile = true;
        file = image.file;
      } else {
        file = image.data_url;
      }

      const obj = {
        file: file,
        spot_id: spot_id,
        newFile: newFile,
      };

      await dispatch(uploadFile(obj));
    }
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

  return (
    <div className="spot_form_container">
      <div className="spot_form_content">
        {" "}
        <form className="spot_form" onSubmit={handleSubmit}>
          <div className="spot_form_input_container">
            <div className="spot_form_field_container">
              <div className="spot_input_main_container">
                <h3>Edit {name}:</h3>
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
                  <label className="label">Price $:</label>
                  <input
                    class="spot_price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="formInputSection" id="imageUploadSection">
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
                      maxNumber={80}
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
                            Add or Drag Images Here
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
