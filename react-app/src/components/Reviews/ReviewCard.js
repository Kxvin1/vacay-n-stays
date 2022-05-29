import React, { useState, useEffect } from "react";
import { deleteOneReview, editSpotReview } from "../../store/reviews";
import { useDispatch } from "react-redux";
import { Rating } from "react-simple-star-rating";

const ReviewCard = ({ review, user }) => {
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
  }, [review]);

  const deleteReview = async () => {
    dispatch(deleteOneReview(review.id));
    setShowDelete(false);
  };

  const editReview = async (e) => {
    e.preventDefault();

    const data = await dispatch(
      editSpotReview(
        review.id,
        comment,
        cleanlinessRating,
        locationRating,
        valueRating
      )
    );

      setShowEdit(false);
  };

  const closeEditForm = () => {
    setCleanlinessRating(review?.cleanliness);
    setLocationRating(review?.location);
    setValueRating(review?.value);
    setComment(review?.comment);
    setShowEdit(false);
  };

  return (
    <div>
      <div className="singleReview">
        <div className="comment">{review.comment}</div>
        {review.user_id === user?.id && (
          <div className="modifyReviewBtns">
            <button className="modifyBtn" title="Delete Review" onClick={() => setShowDelete(true)}>
              <i class="fa fa-trash"></i>
            </button>
            <button className="modifyBtn" title="Edit Review" onClick={() => setShowEdit(true)}>
              <i class="fas fa-edit"></i>
            </button>
          </div>
        )}
      </div>
      {showDelete && (
        <div className="modal">
          <div className="deleteReviewForm">
            <div className="x" onClick={() => setShowDelete(false)}>
              <i className="fas fa-times"></i>
            </div>

            <div>Are you sure you want to delete your review?</div>
            <button className="modifyBtn" onClick={deleteReview}>
              Confirm Delete
            </button>
            <button className="modifyBtn" onClick={() => setShowDelete(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {showEdit && (
        <div className="modal">
          <div className="editReviewForm">
            <div className="x" onClick={closeEditForm}>
              <i className="fas fa-times"></i>
            </div>
            <h2>Edit Review</h2>
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
                  className="commentBox"
                  name="description"
                  type="input"
                  required
                  autoComplete="off"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button className="modifyBtn" type="submit">
                  Edit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
