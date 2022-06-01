import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadSpotReviews } from "../../store/reviews";
import { addNewBookingThunk } from "../../store/booking";
import { getSpots } from "../../store/spots";
import Reviews from "../Reviews/Reviews";
import DatePicker from "react-calendar";
import ReactBnbGallery from "react-bnb-gallery";

import "./SpotDetailPage.css";
import "./calendar.css";
import "react-bnb-gallery/dist/style.css";

export default function SpotDetailPage() {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const user = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots[spotId]);
  const reviews = useSelector((state) => Object.values(state.reviews));

  const [date, setDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoObject, setPhotoObject] = useState([]);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  useEffect(() => {
    dispatch(getSpots(spotId));
    dispatch(loadSpotReviews(spotId));
  }, [dispatch, spotId]);

  // useEffect(() => {
  //   if (date) {
  //     const displayDate = `${
  //       date[0].getMonth() + 1
  //     }/${date[0].getDate()}/${date[0].getFullYear()} - ${
  //       date[1].getMonth() + 1
  //     }/${date[1].getDate()}/${date[1].getFullYear()}`;
  //     setFormattedDate(displayDate);
  //   }
  // }, [date]);

  const monthFormatter = {
    Jan: "1",
    Feb: "2",
    Mar: "3",
    Apr: "4",
    May: "5",
    Jun: "6",
    Jul: "7",
    Aug: "8",
    Sep: "9",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    // console.log(date, "DATE");

    // console.log(date[0], "date[0]"); // check in
    // console.log(date[1], "date[1]"); // check out

    // const convertedObjToStr = date[0].toString();
    // // console.log(convertedObjToStr, "convertedObjToStr");
    // let checkInDateArray = convertedObjToStr.split(" ");
    // console.log(checkInDateArray);

    // const checkInDateArrayMonth = monthFormatter.checkInDateArray[1];
    // console.log(checkInDateArrayMonth);
    // const checkInDateArrayDay = checkInDateArray[2];
    // const checkInDateArrayYear = checkInDateArray[3];

    const checkInDate = date[0].toISOString().split("T")[0];
    console.log(checkInDate);

    const checkOutDate = date[1].toISOString().split("T")[0];
    console.log(checkOutDate);

    const data = await dispatch(
      addNewBookingThunk(user.id, spotId, checkInDate, checkOutDate)
    );
  };

  const handlePhotos = (photosIndex) => {
    if (!photoObject.length) {
      const spotImages = [];

      for (let i = 0; i < spot?.images.length; i++) {
        spotImages.push({
          photo: spot?.images[i],
          caption: spot?.name,
        });
      }
      setPhotoObject(spotImages);
    }
    setPhotoIndex(photoIndex);
    setShowPhotoModal(true);
  };

  return (
    <div className="spot_detail_main_container">
      <h1>{spot?.name}</h1>
      <div
        className="spot_image_container"
        style={{ backgroundImage: `url(${spot?.images[0]})` }}
      ></div>
      <div className="spot_detail_container">
        <div className="spot_address">
          {spot?.address.length > 40 ? (
            <h4>{spot?.address}</h4>
          ) : (
            <h3>
              {spot?.address} {spot?.city} {spot?.state}
            </h3>
          )}
        </div>
        <div className="description">{spot?.description}</div>
        <div className="images_container">
          {spot?.images.map((image) => (
            <img
              className="image"
              src={image}
              alt={image.id}
              onClick={() => handlePhotos()}
            />
          ))}
        </div>
      </div>
      <ReactBnbGallery
        show={showPhotoModal}
        onClose={() => setShowPhotoModal(false)}
        photos={photoObject}
        activePhotoIndex={photoIndex}
      />
      <div className="action_container">
        <div className="hosted_by">
          Hosted by <span>{spot?.user.first_name}</span>
          {spot?.user.last_name}
        </div>
        <div className="booking_container">
          <h2>Booking</h2>
          <form onSubmit={handleBooking}>
            <DatePicker
              onChange={(picked) => setDate(picked)}
              value={date}
              view={"month"}
              showFixedNumberOfWeeks={true}
              prev2Label={null}
              next2Label={null}
              returnValue="range"
              selectRange={true}
            />
            <input type="text" value={formattedDate} placeholder="Add date" />
            <button type="Submit">Book</button>
          </form>
        </div>
        <div></div>
      </div>
      <div className="reviews_container">
        <Reviews spotId={spotId} reviews={reviews} user={user} />
      </div>
    </div>
  );
}
