import React from 'react';

function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <h2>About Us</h2>
      <p>At Dev Vidhya Peeth Academy, we are committed to nurturing young minds in a modern, caring environment.</p>
      <div className="about-cards">
        <div className="card">
          <h3>Mission</h3>
          <p>Our mission is to provide a holistic learning experience...</p>
        </div>
        <div className="card">
          <h3>Vision</h3>
          <p>Our vision is to foster creativity, critical thinking, and confidence in every child...</p>
        </div>
      </div>
      <div className="about-cards">
        <div className="card">
          <h3>Mission2</h3>
          <p>Our mission is to provide a holistic learning experience....</p>
        </div>
        <div className="card">
          <h3>Vision2</h3>
          <p>Our vision is to foster creativity, critical thinking, and confidence in every child...</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
