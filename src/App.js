import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Enrollment from './components/Enrollment';
import EnrollmentForm from './components/EnrollmentForm';  // Import the new form
import Curriculum from './components/Curriculum';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      <Curriculum />
      {/* <Enrollment />
       */}
       <EnrollmentForm />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
