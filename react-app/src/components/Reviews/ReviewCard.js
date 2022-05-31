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

  const avatars = [
    "https://randomuser.me/api/portraits/women/8.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    "https://randomuser.me/api/portraits/women/33.jpg",
    "https://randomuser.me/api/portraits/men/29.jpg",
    "https://images.unsplash.com/photo-1496081081095-d32308dd6206?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=dd302358c7e18c27c4086e97caf85781",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/84.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/men/97.jpg",
    "https://randomuser.me/api/portraits/women/33.jpg",
    "https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    "https://randomuser.me/api/portraits/women/9.jpg",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50",
    "https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e",
  ];

  return (
    <div className="singleReview">
      <div className="avatar_container">
        <img className="avatar" src={avatars[review?.user_id]} />
      </div>
      <div className="review_info">
        <h3>{review?.user.first_name}</h3>
        <p>{review.date}</p>
      </div>

      <div className="comment">{review.comment}</div>
      {review.user_id === user?.id && (
        <div className="modifyReviewBtns">
          <button
            className="modifyBtn"
            title="Delete Review"
            onClick={() => setShowDelete(true)}
          >
            <i class="fa fa-trash"></i>
          </button>
          <button
            className="modifyBtn"
            title="Edit Review"
            onClick={() => setShowEdit(true)}
          >
            <i class="fas fa-edit"></i>
          </button>
        </div>
      )}

      {showDelete && (
        <div className="modal">
          <div className="reviewFormModal">
            <div className="x" onClick={() => setShowDelete(false)}>
              <i className="fas fa-times"></i>
            </div>
            <h2>Delete</h2>
            <p>Are you sure you want to delete your review?</p>
            <button className="modifyBtn" onClick={deleteReview}>
              Delete
            </button>
            <button className="modifyBtn" onClick={() => setShowDelete(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {showEdit && (
        <div className="modal">
          <div className="reviewFormModal">
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
