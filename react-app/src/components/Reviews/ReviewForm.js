import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import { addNewReview } from "../../store/reviews";

const ReviewForm = ({ userId, spotId }) => {
  const dispatch = useDispatch();

  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [locationRating, setLocationRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await dispatch(
      addNewReview(
        userId,
        spotId,
        comment,
        cleanlinessRating,
        locationRating,
        valueRating
      )
    );

    setCleanlinessRating(0);
    setLocationRating(0);
    setValueRating(0);
    setComment('');
  };
  console.log(locationRating)
  return (
    <>
      <form className="reviewForm" onSubmit={handleSubmit}>
        <div className="ratings">
        <div className="ratingLabel">Cleanliness</div>
        <Rating
          onClick={(rating) => setCleanlinessRating(rating)}
          ratingValue={cleanlinessRating}
          fillColor={"rgb(255, 215, 0)"}
        />
        <div className="ratingLabel">Location</div>
        <Rating
          onClick={(rating) => setLocationRating(rating)}
          ratingValue={locationRating}
          fillColor={"rgb(255, 215, 0)"}
        />
        <div className="ratingLabel">Value</div>
        <Rating
          onClick={(rating) => setValueRating(rating)}
          ratingValue={valueRating}
          fillColor={"rgb(255, 215, 0)"}
        />
        </div>
        <div className="commentForm">
        <label>Comment</label>
        <textarea
          className="commentBoxInput"
          name="description"
          type="input"
          value={comment}
          required
          autoComplete="off"
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="modifyBtn" type="submit" disabled={locationRating === 0 || cleanlinessRating === 0 || valueRating === 0 || comment === '' ? true : false }>
          New Review
        </button>        
        </div>

      </form>
    </>
  );
};

export default ReviewForm;
