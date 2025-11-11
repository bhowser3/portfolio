import { useState } from 'react';
import '../styles/Projects.css';
import '../styles/ImageCarousel.css';

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      url: "https://images.pexels.com/photos/734973/pexels-photo-734973.jpeg?_gl=1*hh9acz*_ga*MTg1OTAzNTQ3OS4xNzYxNjgxODQ2*_ga_8JE65Q40S6*czE3NjE2ODE4NDUkbzEkZzEkdDE3NjE2ODIxNzIkajU0JGwwJGgw",
      alt: "Beautiful landscape"
    },
    {
      url: "https://images.pexels.com/photos/1350197/pexels-photo-1350197.jpeg?_gl=1*13iji9l*_ga*MTg1OTAzNTQ3OS4xNzYxNjgxODQ2*_ga_8JE65Q40S6*czE3NjE2ODE4NDUkbzEkZzEkdDE3NjE2ODIyMjUkajEkbDAkaDA",
      alt: "Modern architecture"
    },
    {
      url: "https://images.pexels.com/photos/1452701/pexels-photo-1452701.jpeg?_gl=1*1mm1zdw*_ga*MTg1OTAzNTQ3OS4xNzYxNjgxODQ2*_ga_8JE65Q40S6*czE3NjE2ODE4NDUkbzEkZzEkdDE3NjE2ODIyNDQkajU1JGwwJGgw",
      alt: "Urban cityscape"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-button prev" onClick={prevImage} aria-label="Previous image">
          &#8249;
        </button>
        
        <div className="carousel-images">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="carousel-image"
          />
        </div>
        
        <button className="carousel-button next" onClick={nextImage} aria-label="Next image">
          &#8250;
        </button>
      </div>
      
      <div className="carousel-dots">
        {images.map((_p, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Project3() {
  return (
    <div id="project3" className="project-container">
      <h2 className="project-title">3D Printed Homelab Stack</h2>
      <p className="project-text">
        In this project I have created a custom designed modular 3D printed rack system for home lab.
        Complete with mutliple RaspberryPis running, bots, or home assistant. 
        Custom network switch module, along with homemade patch cables.
        Custom USB hub module for desktop PC connectivity.
        All designs were made with Autodesk Tinkercad.
      </p>
      <ImageCarousel />
    </div>
  );
}

export default Project3;