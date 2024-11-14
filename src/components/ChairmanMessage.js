// src/ChairmansMessage.js
import React, { useState, useEffect } from 'react';
// import './ChairmansMessage.css'; // Updated styling with dynamic effects

const ChairmansMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    // Trigger the visibility when scrolled down 200px
    if (position > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Detect scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`chairman-message ${isVisible ? 'visible' : ''}`}>
      <div className="message-container">
        <h2>Message from the Chairman</h2>
        <div className="chairman-info">
          <img
            src="path_to_your_chairman_image.jpg" // Replace with actual image path
            alt="Dr. Rajesh Mishra"
            className={`chairman-image ${isVisible ? 'show' : ''}`}
          />
          <div className="message-content">
            <p className="chairman-name">Dr. Rajesh Mishra</p>
            <p className="chairman-text">
              "Education is the most powerful tool that can change the world. At Dev Vidhya Peeth Academy, we are committed to providing holistic education that nurtures curiosity, creativity, and character in our students. Our mission is to shape young minds into compassionate, skilled, and confident individuals who will contribute meaningfully to society.
              <br /><br />
              I believe that every child is capable of achieving great things when given the right opportunities and support. We, at the academy, strive to create an environment that empowers students to explore their potential, develop leadership skills, and embrace challenges with resilience. Together, let’s build a brighter future for our children and our community."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmansMessage;
