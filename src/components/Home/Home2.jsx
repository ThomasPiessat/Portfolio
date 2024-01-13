import React from "react";
import { Container, Col } from "react-bootstrap";
import { cv } from '../../../src/projectsData';
import "./Home2.css"


function Home2() {
  const handleDownload = () => {
    const pdfPath = '../src/assets/dl/FR_CV.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    
    // Set the href attribute to the PDF path
    link.href = pdfPath;
    
    // Specify that the link is to be downloaded
    link.setAttribute('download', '../src/assets/dl/FR_CV.pdf');
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger a click on the link to start the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <Container fluid className="home-about-section" id="about">
      <Col md={8} className="home-about-description">
        <h1>LET ME INTRODUCE MYSELF</h1>
        <p>
          I’m a software engineer with experience in C#/C++, Unity, Unreal Engine, and tools.
        </p>
        <p>
          I’m sort of a generalist, and at the moment my main areas of interest are tools and plugins in Unreal Engine 5.
        </p>
      </Col>  
      <div className="card">
        <h1>Resume</h1>
        <div className="card-description">
          <img src={cv.CV} alt='resume' width="350" height="550"/>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      </div>
    </Container>
  );
}

export default Home2;