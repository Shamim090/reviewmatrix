import React, { useState, useContext, useEffect } from "react";
import "../styles/FbReviewForm.css"; // Import the CSS module
import DatePicker from "react-datepicker"; // Add date picker library
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import useSubmitDataToJSON from "./useSubmitDataToJSON "; // Import the custom hook
import { UserContext } from "../App";

const FbReviewForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // Destructure functions from the hook, including setFormData

  const { formData, setFormData, handleChange, handleSubmit, isLoading } =
    useSubmitDataToJSON();
  // Add UserID to formData on initial render
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      reviewerId: currentUser.userId, // Assuming currentUser has a userId property
    }));
  }, [currentUser, setFormData]);

  const urls = "http://localhost:3001/userReviews";

  return (
    <form
      onSubmit={(e) => handleSubmit(e, urls)}
      className="facebook-page-review-form">
      <h2>Facebook Page Review Form</h2>
      <div className="form-group">
        <label htmlFor="nameOfPage">Name of Facebook Page:</label>
        <input
          type="text"
          id="nameOfPage"
          name="nameOfPage"
          value={formData.nameOfPage}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="pageUrl">Page URL:</label>
        <input
          type="url"
          id="pageUrl"
          name="pageUrl"
          value={formData.pageUrl}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="experienceDate">Experience Date:</label>
        <DatePicker
          selected={formData.experienceDate} // Pass selected date
          onChange={(date) =>
            handleChange({ target: { name: "experienceDate", value: date } })
          }
          dateFormat="dd/MM/yyyy" // Adjust date format if needed
        />
      </div>
      <div className="form-group">
        <label htmlFor="experience">Your Experience (Text Area):</label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows="5" // Adjust the number of rows as needed
          className="form-control"
          required
        />
      </div>
      {/* ... other form fields ... */}
      <div className="review-summary">
        <h3>Review Summary</h3>
        <div className="rating-group form-group">
          <label htmlFor="productPriceRating">Rate Product Price:</label>
          <div>
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating}>
                <input
                  type="radio"
                  id={`productPriceRating${rating}`} // Consistent ID naming
                  name="productPriceRating" // Single name for all radio buttons
                  value={rating}
                  checked={formData.productPriceRating === rating} // Controlled with formData
                  onChange={handleChange}
                  required
                />
                {rating}
              </label>
            ))}
          </div>
        </div>

        <div className="rating-group form-group">
          <label htmlFor="productQualityRating">Rate Product Quality:</label>
          <div>
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating}>
                <input
                  type="radio"
                  id={`productQualityRating${rating}`} // Consistent ID naming
                  name="productQualityRating" // Single name for all radio buttons
                  value={rating}
                  checked={formData.productQualityRating === rating} // Controlled with formData
                  onChange={handleChange}
                  required
                />
                {rating}
              </label>
            ))}
          </div>
        </div>

        <div className="rating-group form-group">
          <label htmlFor="DeliveryServiceRating">Rate Delivery Service:</label>
          <div>
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating}>
                <input
                  type="radio"
                  id={`DeliveryServiceRating${rating}`} // Consistent ID naming
                  name="DeliveryServiceRating" // Single name for all radio buttons
                  value={rating}
                  checked={formData.DeliveryServiceRating === rating} // Controlled with formData
                  onChange={handleChange}
                  required
                />
                {rating}
              </label>
            ))}
          </div>
        </div>

        <div className="rating-group form-group">
          <label htmlFor="CustomerServiceRating">Rate Customer Service:</label>
          <div>
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating}>
                <input
                  type="radio"
                  id={`CustomerServiceRating${rating}`} // Consistent ID naming
                  name="CustomerServiceRating" // Single name for all radio buttons
                  value={rating}
                  checked={formData.CustomerServiceRating === rating} // Controlled with formData
                  onChange={handleChange}
                  required
                />
                {rating}
              </label>
            ))}
          </div>
        </div>
        {/* ... other rating groups ... */}
      </div>
      <button type="submit" disabled={isLoading} className="submit-button">
        {isLoading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
};

export default FbReviewForm;
