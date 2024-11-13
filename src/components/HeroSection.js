import React from 'react';
import Slider from 'react-slick';
import school1 from '../images/school1.jpg';
import school2 from '../images/school2.jpg';
import school3 from '../images/school3.jpg';

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
          <img src={school1} alt="School Image 1" />
        </div>
        <div>
          <img src={school2} alt="School Image 2" />
        </div>
        <div>
          <img src={school3} alt="School Image 3" />
        </div>
        </div>
      {/* </Slider> */}
      <button onClick={() => window.location.href="#enrollment"}>Enroll Now</button>
    </section>
  );
}

export default HeroSection;
