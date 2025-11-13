import { useState } from 'react';
import '../styles/Projects.css';
import '../styles/ImageCarousel.css';

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const img = p => `${import.meta.env.BASE_URL}pictures/homelab_photos/${p}`;
  const images = [
    { url: img('lab_1.jpg'), alt: 'Homelab rack angle 1' },
    { url: img('lab_2.jpg'), alt: 'Homelab rack angle 2' },
    { url: img('lab_3.jpg'), alt: 'Homelab rack angle 3' },
    { url: img('lab_4.jpg'), alt: 'Homelab rack angle 4' },
    { url: img('lab_5.jpg'), alt: 'Homelab rack angle 5' },
    { url: img('lab_6.jpg'), alt: 'Homelab rack angle 6' },
  ];


  const nextImage = () => setCurrentIndex(i => (i + 1) % images.length);
  const prevImage = () => setCurrentIndex(i => (i - 1 + images.length) % images.length);
  const goToImage = (i) => setCurrentIndex(i);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-button prev" onClick={prevImage} aria-label="Previous image">
          &#8249;
        </button>

        <div className="carousel-images">
          <img src={images[currentIndex].url} alt={images[currentIndex].alt} className="carousel-image" />
        </div>

        <button className="carousel-button next" onClick={nextImage} aria-label="Next image">
          &#8250;
        </button>
      </div>
      <div class="carousel-label">{images[currentIndex].desc}</div>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Project3() {
  return (
    <div id="project3" className="project-container">
      <h2 className="project-title">3D Printed Homelab Rack</h2>
      <p className="project-text">
        In this project I have created a custom modular 3D-printed rack system for my home lab.
        It houses multiple Raspberry Pis running various services and bots, a custom network switch module with homemade patch cables, 
        and a USB hub module for desktop PC connectivity.  
        The design features studs and holes so all of the modules can be reorganized in any fashion. 
        All designs were made in Autodesk Tinkercad.
      </p>
      <ImageCarousel />
    </div>
  );
}

export default Project3;
