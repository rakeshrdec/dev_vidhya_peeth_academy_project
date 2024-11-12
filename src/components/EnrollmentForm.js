import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function EnrollmentForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    guardianName: '',
    guardianPhone: '',
    documents: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: e.target.files[0] });
  };

  const handleDownload = () => {
    // Simulating a form template download (You should replace this with your own file URL)
    const formUrl = 'https://docs.google.com/document/d/1p6XMTOA2EfOX51qNXwxEOIIDTxjI0FSr/edit?usp=sharing&ouid=118438166437082572540&rtpof=true&sd=true';
    window.open(formUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Submit formData to your backend or handle as needed
  };

  return (
    <section className="enrollment-process" id="enrollment">
      <h2>Enrollment Process</h2>
      <p>Enroll your child with ease by following the steps below.</p>

      <Tabs>
        <TabList>
          <Tab>Personal Information</Tab>
          <Tab>Guardian Information</Tab>
          <Tab>Document Upload</Tab>
        </TabList>

        {/* Personal Information Tab */}
        <TabPanel>
          <h3>Personal Information</h3>
          <form>
            <label>Student Name:</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              required
            />
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </form>
        </TabPanel>

        {/* Guardian Information Tab */}
        <TabPanel>
          <h3>Guardian Information</h3>
          <form>
            <label>Guardian's Name:</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleInputChange}
              required
            />
            <label>Guardian's Phone:</label>
            <input
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleInputChange}
              required
            />
          </form>
        </TabPanel>

        {/* Document Upload Tab */}
        <TabPanel>
          <h3>Document Upload</h3>
          <form onSubmit={handleSubmit}>
            <label>Upload Required Documents:</label>
            <input type="file" onChange={handleFileChange} required />
            <button type="submit">Submit Enrollment</button>
          </form>
        </TabPanel>
      </Tabs>

      {/* Download Form Template Button */}
      <button onClick={handleDownload} className="download-btn">
        Download Enrollment Form
      </button>
    </section>
  );
}

export default EnrollmentForm;
