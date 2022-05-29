import React, { useState, useEffect } from "react";
import { deleteOneReview, editSpotReview } from "../../store/reviews";
import { useDispatch } from "react-redux";
import { Rating } from "react-simple-star-rating";

const ReviewCard = ({ review }) => {
  const dispatch = useDispatch();
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [locationRating, setLocationRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    setCleanlinessRating(review?.cleanliness);
    setLocationRating(review?.location);
    setValueRating(review?.value);
    setComment(review?.comment);
}, [review])

  const deleteReview = async () => {
    dispatch(deleteOneReview(review.id));
    setShowDelete(false);
  };

  const editReview = async (e) => {
    e.preventDefault();

    const data = await dispatch(editSpotReview(review.id, comment, cleanlinessRating, locationRating, valueRating))
    
    if (data[0] === "Updated") {
        setShowEdit(false)
    } else {
        return "Error"
    }
}

const closeEditForm = () => {
    setCleanlinessRating(review?.cleanliness);
    setLocationRating(review?.location);
    setValueRating(review?.value);
    setComment(review?.comment);
    setShowEdit(false)
}

  return (
    <div>
      <div className="modifyReviewBtns">
        <button onClick={() => setShowDelete(true)}>
          <i class="fa fa-trash" title="Delete Review"></i>
        </button>
        <button onClick={() => setShowEdit(true)}>
          <i class="fas fa-edit" title="Edit Review"></i>
        </button>
      </div>
      <div className="comment">{review.comment}</div>

      {showDelete && (
        <div className="modal">
          <div className="deleteReviewForm">
            <div className="x" onClick={() => setShowDelete(false)}>
              <i className="fas fa-times"></i>
            </div>

            <div>Are you sure you want to delete your review?</div>
            <button onClick={deleteReview}>Confirm Delete</button>
            <button onClick={() => setShowDelete(false)}>Cancel</button>
          </div>
        </div>
      )}

      {showEdit && (
        <div className="modal">
          <div className="editReviewForm">
            <div className="x" onClick={closeEditForm}>
              <i className="fas fa-times"></i>
            </div>
            <div className="starRatings">
              <div className="starTitle">Cleanliness</div>
              <Rating
                onClick={(rating) => setCleanlinessRating(rating)}
                ratingValue={cleanlinessRating}
                fillColor={"rgb(255, 215, 0)"}
              />
              <div className="starTitle">Location</div>
              <Rating
                onClick={(rating) => setLocationRating(rating)}
                ratingValue={locationRating}
                fillColor={"rgb(255, 215, 0)"}
              />
              <div className="starTitle">Value</div>
              <Rating
                onClick={(rating) => setValueRating(rating)}
                ratingValue={valueRating}
                fillColor={"rgb(255, 215, 0)"}
              />
            </div>
            <div>
              <form className="commentForm" onSubmit={editReview}>

                  <label>Comment</label>
                  <textarea
                    className="commentBoxInput"
                    name="description"
                    type="input"
                    required
                    autoComplete="off"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />

              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
