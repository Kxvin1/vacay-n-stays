import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { useDispatch } from "react-redux";

import './reviews.css'

const Reviews = ({ spotId, reviews, user }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="allReviewsContainer">
        {reviews.map((review) =>
            <ReviewCard review={review} key={review.id} user={user} />
        )}
      </div>
      <div>
        <ReviewForm spotId={spotId} />
      </div>
    </>
  );
};

export default Reviews;
