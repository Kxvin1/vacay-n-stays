import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { loadSpotReviews } from "../../store/reviews";
import { useSelector, useDispatch } from "react-redux";

import './reviews.css'

const Reviews = () => {
  const dispatch = useDispatch()
  const spotId = 1;
  const userId = 1;
  const reviews = useSelector((state) => Object.values(state.reviews));
console.log(reviews)
  useEffect(() => {
    dispatch(loadSpotReviews(spotId))
  }, [dispatch])

  return (
    <>
      {/* <div>
        <ReviewForm />
      </div> */}
      <div className="allReviewsContainer">
        {reviews.map((review) =>
          review.spot_id === spotId ? (
            <ReviewCard review={review} key={review.id} user={userId} />
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};

export default Reviews;
