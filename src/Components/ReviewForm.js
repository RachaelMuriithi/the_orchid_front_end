import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FlowerContext } from "./FlowerContext";
import "./Review.css";
function ReviewForm() {
  const navigate = useNavigate();
  const {
    setTrigger,
    handleReviewChange,
    newReview,
    handleSubmitReview,
    reviewError,
  } = useContext(FlowerContext);

  return (
    <div className="popup">
      <form id="review-form" onSubmit={handleSubmitReview}>
        <label htmlFor="title">Star Rating</label>
        <br />
        <input
          type="text"
          name="title"
          value={newReview.star_rating}
          onChange={handleReviewChange}
        />
        <br />
        <label htmlFor="comment">Description</label>
        <br />
        <textarea
          cols="50"
          rows="4"
          className="text-area"
          name="comment"
          value={newReview.comment}
          onChange={handleReviewChange}
        ></textarea>
        <br />
        <div className="action-btns">
          <button type="submit" className="review-btn-1">
            Submit Your Review
          </button>
          <br />
          <button
            type="button"
            className="review-btn-1"
            onClick={() => setTrigger((prevState) => !prevState)}
          >
            Cancel
          </button>
        </div>
        {reviewError.length > 0
          ? reviewError.find((review) => review.includes("Review not found"))
            ? navigate("/login")
            : null
          : null}
      </form>
    </div>
  );
}

export default ReviewForm;