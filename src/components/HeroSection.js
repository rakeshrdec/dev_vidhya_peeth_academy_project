import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Welcome to Dev Vidhya Peeth Academy</h1>
      <p>A Place Where Every Student Shines!</p>
      <button onClick={() => window.location.href="#enrollment"}>Enroll Now</button>
    </section>
  );
}

export default HeroSection;
