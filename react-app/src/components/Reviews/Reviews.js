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

  return (
    <>
      <h2>Reviews</h2>
      <h4 className="center">{avgRatings[1]} total reviews</h4>
      <div id="starRatings" className="starAvgs">
        
        <div>Cleanliness</div>
        <div className="bar">
        <div className="full">
          <div className="reviewBar" style={{width: `${avgRatings[2] * 24}px`}}></div>
        </div>  
        <div className="avgRatingPerCategory">{avgRatings[2]}</div> 
        </div>
        <div>Location</div>
        <div className="bar">
        <div className="full">
          <div className="reviewBar" style={{width: `${avgRatings[3] * 24}px`}}></div>
        </div>  
        <div className="avgRatingPerCategory">{avgRatings[3]}</div> 
        </div>
        <div>Value</div>
        <div className="bar">
        <div className="full">
          <div className="reviewBar" style={{width: `${avgRatings[4] * 24}px`}}></div>
        </div>  
        <div className="avgRatingPerCategory">{avgRatings[4]}</div> 
        </div>
        <div>Total</div>
        <div className="bar">
        <div className="full">
          <div className="reviewBar" style={{width: `${avgRatings[0] * 24}px`}}></div>
        </div>  
        <div className="avgRatingPerCategory">{avgRatings[0]}</div> 
        </div>        
        
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
