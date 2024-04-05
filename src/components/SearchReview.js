import React, { useState } from "react";
import "../styles/SearchReview.css";

const SearchReview = ({ reviews, onSearchChange }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase()); // Convert to lowercase for case-insensitive matching
    const filteredReviews = filterReviews(reviews, event.target.value);
    onSearchChange(filteredReviews);
  };

  const filterReviews = (reviews, searchText) => {
    if (!searchText) {
      return reviews; // No search text, return all reviews
    }

    return reviews.filter((review) => {
      const pageUrlMatch = review.pageUrl.toLowerCase().includes(searchText);
      const experienceMatch = review.experience.toLowerCase().includes(searchText.toLowerCase());
      const nameOfPageMatch = review.nameOfPage.toLowerCase().includes(searchText.toLowerCase());

      return pageUrlMatch || experienceMatch|| nameOfPageMatch; // Show if either condition is true
    });
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search reviews..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      <div className="search-button-container">
        <button type="button" onClick={() => handleSearchChange(searchText)}>
          Search it
        </button>
      </div>
    </div>
  );
};

export default SearchReview;
