import React, { useState } from 'react';
// import './Popup.css';
import school3 from '../images/school3.jpg';

const Popup = () => {
  // State to manage popup visibility
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="popup-container">
      {/* Button to trigger the popup */}
      <button className="popup-btn" onClick={openPopup}>
        🎉 Celebrate Children's Day! 🎉
      </button>

      {/* Popup structure */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <img
              src="https://media.istockphoto.com/id/1227653366/vector/festive-composition-for-international-childrens-day.jpg?s=612x612&w=0&k=20&c=aOKsxVA5oPztLioMePtJHX_PHFL_ic8qT8ic2kCUCpM="// Add a festive image
              alt="Children's Day Balloon"
              className="popup-image"
            />
            <h2>Happy Children's Day!</h2>
            <p>Wishing all the children a wonderful and joyful day filled with happiness and fun! 🎈</p>
            <p><strong>Let's celebrate the spirit of childhood!</strong></p>
            <button className="popup-close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
