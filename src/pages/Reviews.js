import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FbReviewForm from "../components/FbReviewForm";
import Modal from "react-modal";
import SearchReview from "../components/SearchReview";
import "../styles/Reviews.css";
import { UserContext } from "../App";
import { FaWindowClose } from "react-icons/fa";
import useFetchData from "../components/useFetchData";

import AllReviews from "../components/AllReviews";
import LoginForm from "./LoginForm";

const Reviews = () => {
  const urls = "http://localhost:3001/userReviews";
  const { data, isLoading, error } = useFetchData(urls);
  const [filteredReviews, setFilteredReviews] = useState([]);
  
useEffect(() => {
  setFilteredReviews(data);
}, [data]); // Update filteredReviews when data changes

  const { currentUser } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigateToWriteReview = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCloseRequest = () => {
    // You can add a confirmation here before closing
    // return false; // Prevents immediate closure
  };
  const onSearchChange = (filteredData) => {
    setFilteredReviews(filteredData); // Update state with filtered reviews
  };

  return (
    <div className="reviews-container">
      <div className="search-bar-container">
        <SearchReview reviews={data} onSearchChange={onSearchChange} />
      </div>

      <div className="grid-container">
        <div className="filters-container">
          {/* Filters will be here */}
          Filters will be displayed in this 30% width section.
        </div>
        <div className="review-results-container">
          <AllReviews reviews={filteredReviews} onOpenModal={openModal} />

          {/* Render review content here (e.g., using a loop to display reviews) */}
          {/* Replace with your review data and rendering logic */}
          <p>No reviews yet. Be the first to write one!</p>

          <button
            className="sticky-write-review"
            onClick={
              !currentUser
                ? openModal
                : () => navigateToWriteReview("/write-review")
            }>
            Write a Review
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseRequest}
        className="modal-view"
        overlayClassName={isModalOpen && "darkish-overlay"}>
        <LoginForm
          closeModal={closeModal}
          message="To Write a Review you need to login first!"
        />
        <button onClick={closeModal} className="modal-close-button">
          <FaWindowClose />
        </button>
      </Modal>
    </div>
  );
};

export default Reviews;
