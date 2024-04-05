import React from "react";
import ReviewSummary from "../components/ReviewSummery";
import "../styles/AllReviews.css";


const AllReviews = ({ reviews, onOpenModal }) => {
 
  console.log(reviews)
  return (
    <div className="all-reviews">
      {reviews.map((review) => (
        <ReviewSummary
          key={review.id}
          reviewData={review}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
};

AllReviews.defaultProps = {
  reviews: [], // Set default empty reviews array
};

export default AllReviews;
