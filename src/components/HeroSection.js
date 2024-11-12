import React from 'react';
import Slider from 'react-slick';

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="hero-section">
      <h1>Welcome to Dev Vidhya Peeth Academy</h1>
      <p>A Place Where Every Student Shines!</p>
      {/* <Slider {...settings}> */}
        <div>
        <div>
          <img src="images/school1.jpg" alt="School Image 1" />
        </div>
        <div>
          <img src="images/school2.jpg" alt="School Image 2" />
        </div>
        <div>
          <img src="images/school3.jpg" alt="School Image 3" />
        </div>
        </div>
      {/* </Slider> */}
      <button onClick={() => window.location.href="#enrollment"}>Enroll Now</button>
    </section>
  );
}

export default HeroSection;
