import React from "react";
import Modal from "react-modal";
import ReviewDetails from "../components/ReviewDetails";
import useViewModal from "../components/useViewModal"; // Assuming correct import path
import "../styles/ReviewSummery.css"; // Assuming stylesheet exists

const ReviewSummary = ({ reviewData }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useViewModal();

  return (
    <div className="review-summary">
      <div className="summary-header">
        <p className="name">{reviewData.nameOfPage}</p>
        <span className="rating">
          <i className="fas fa-star-half-alt"></i>{" "}
          {reviewData.productPriceRating}
        </span>
      </div>
      <p className="experience-excerpt">
        {reviewData.experience.slice(0, 100)}...
      </p>
      <button className="view-details-btn" onClick={handleOpenModal}>
        See full review...
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className="modal-view"
        overlayClassName={isOpen && "darkish-overlay"}>
        <ReviewDetails reviewData={reviewData} />
        {/* Use the close button provided by useViewModal */}
        <button onClick={handleCloseModal} className="modal-close-button">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ReviewSummary;
