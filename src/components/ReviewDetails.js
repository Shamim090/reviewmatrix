import React from "react";
import "../styles/ReviewDetails.css";

const ReviewDetails = ({ reviewData }) => {
  return (
    <div className="review-details">
      <h2>{reviewData.nameOfPage}</h2>
      <p className="reviewer-id">Reviewer ID: {reviewData.reviewerId}</p>
      <p className="experience">{reviewData.experience}</p>
      <div className="rating-details">
        <p>Product Price Rating: {reviewData.productPriceRating}</p>
        <p>Product Quality Rating: {reviewData.productQualityRating}</p>
        <p>Delivery Service Rating: {reviewData.DeliveryServiceRating}</p>
        <p>Customer Service Rating: {reviewData.CustomerServiceRating}</p>
      </div>
    </div>
  );
};

export default ReviewDetails;
