import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { Rating } from "react-simple-star-rating";

import './reviews.css'

const Reviews = ({ spotId, reviews, user }) => {
  const [sortedReviews, setSortedReviews] = useState([])

  useEffect(() => {
    if (reviews[0] === null) {
      return;
    }

    const sortedReviews = reviews

    sortedReviews.sort(function(a,b) {
      return new Date(b.date) - new Date(a.date)
    })

    setSortedReviews(sortedReviews)

  }, [reviews])

  const calculateAvgRatings = () => {
    if (reviews[0] === null) {
      return;
    }

    let totalCleanliness = 0;
    let totalLocation = 0;
    let totalValue = 0;

    reviews?.forEach(review => {
      totalCleanliness += review.cleanliness
      totalLocation += review.location
      totalValue += review.value

    })

    const length = reviews.length

    const avgCleanliness = (totalCleanliness / length).toFixed(1)
    const avgLocation = (totalLocation / length).toFixed(1)
    const avgValue = (totalValue / length).toFixed(1)
    const avgTotal = ((totalCleanliness + totalLocation + totalValue) / (length * 3)).toFixed(2)

    const avgArray = [avgTotal, length, avgCleanliness, avgLocation, avgValue]
    return avgArray
  }

  const avgRatings = calculateAvgRatings();

  console.log(avgRatings)

  return (
    <>
      <h2>Reviews</h2>
      <div className="starAvgs">
        <div>Total Cleanliness</div>
        <Rating ratingValue={avgRatings[2] * 2 * 10} size="25" />
        <div>Total Location</div>
        <Rating ratingValue={avgRatings[3] * 2 * 10} size="25" />
        <div>Total Value</div>
        <Rating ratingValue={avgRatings[4] * 2 * 10} size="25" />
        <div>Total</div>
        <Rating ratingValue={avgRatings[0] * 2 * 10} size="25" />
      </div>
      
      <div className="allReviewsContainer">
        {sortedReviews.map((review) =>
            <ReviewCard review={review} key={review.id} user={user} />
        )}
      </div>
      <div>
        <ReviewForm spotId={spotId} userId={user.id} />
      </div>
    </>
  );
};

export default Reviews;
