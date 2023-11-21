import React, { useEffect } from 'react';
import './AutoSlideshow.css';

const AutoSlideshow = ({ images }) => {
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    const slideInterval = setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [images]);

  if (!images || !images.length) {
    return <div>No images available for slideshow.</div>;
  }

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div key={index} className={`slide fade ${index === 0 ? 'active' : ''}`}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default AutoSlideshow;