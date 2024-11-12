import React from 'react';

function Enrollment() {
  return (
    <section className="enrollment" id="enrollment">
      <h2>Enrollment Process</h2>
      <p>Follow these simple steps to enroll your child in our academy:</p>
      <ol>
        <li>Step 1: Fill the Enrollment Form</li>
        <li>Step 2: Submit Required Documents</li>
        <li>Step 3: Pay the Enrollment Fee</li>
      </ol>
      <button onClick={() => window.location.href="#contact"}>Contact Us for More Info</button>
    </section>
  );
}

export default Enrollment;
