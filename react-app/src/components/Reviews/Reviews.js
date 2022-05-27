import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { loadSpotReviews } from '../../store/reviews'

const Reviews = ({ user, spot, reviews }) => {
  const spotId = 1;
  const userId = 1;
  const reviews = useSelector(state => Object.values(state.reviews))


  return (
  <>
    <div>
      <ReviewForm />
    </div>
    <div>
      {reviews.map(review =>
          review.spotId === spotId ?
          <ReviewCard review={review} key={review.id} user={userId} />
          : ""
        )}
    </div>
  </>
  );
};

export default Reviews;