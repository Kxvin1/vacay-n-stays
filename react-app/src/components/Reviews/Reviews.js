import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { loadSpotReviews } from "../../store/reviews";
import { useSelector, useDispatch } from "react-redux";

import './reviews.css'

const Reviews = () => {
  const dispatch = useDispatch()
  const spotId = 2;
  const user = useSelector(state => state.session.user);
  const reviews = useSelector((state) => Object.values(state.reviews));

  useEffect(() => {
    dispatch(loadSpotReviews(spotId))
  }, [dispatch])

  return (
    <>
      <div className="allReviewsContainer">
        {reviews.map((review) =>
          review.spot_id === spotId ? (
            <ReviewCard review={review} key={review.id} user={user} />
          ) : (
            ""
          )
        )}
      </div>
      <div>
        <ReviewForm userId={user.id} spotId={spotId} />
      </div>
    </>
  );
};

export default Reviews;
