import { useRef, useState } from 'react';
import '../styles/Projects.css';
import '../styles/ImageCarousel.css';

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);

  const containerRef = useRef(null);

  const img = p => `${import.meta.env.BASE_URL}pictures/homelab_photos/${p}`;
  const images = [
    { url: img('lab_1.jpg'), alt: 'Homelab rack angle 1', desc: "An estimated $19.99 worth of standard PLA filament" },
    { url: img('lab_2.jpg'), alt: 'Homelab rack angle 2', desc: "Missing a network switch right now, in use at the media center"},
    { url: img('lab_3.jpg'), alt: 'Homelab rack angle 3', desc: "This is the RaspberryPi that is hosting the Reddit sports bot! Complete with heatsink, fan, and switch"},
    { url: img('lab_4.jpg'), alt: 'Homelab rack angle 4', desc: "ew dusty..."},
    { url: img('lab_5.jpg'), alt: 'Homelab rack angle 5', desc: "Never said I was a good photographer!"},
    { url: img('lab_6.jpg'), alt: 'Homelab rack angle 6', desc: "No it does live on the floor, it lives amongst its kind"},
  ];

  const nextImage = () =>
    setCurrentIndex(i => (i + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex(i => (i - 1 + images.length) % images.length);

  const goToImage = i => setCurrentIndex(i);

  const getTranslateX = () => {
    const base = -currentIndex * 100;
    if (!isDragging || !containerRef.current) return base;

    const width = containerRef.current.offsetWidth || 1;
    const dragPct = (dragDeltaX / width) * 100;
    return base + dragPct;
  };

  const handleTouchStart = e => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragDeltaX(0);
  };

  const handleTouchMove = e => {
    if (!isDragging || e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    setDragDeltaX(currentX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (!isDragging || !containerRef.current) {
      setIsDragging(false);
      setDragDeltaX(0);
      return;
    }

    const width = containerRef.current.offsetWidth || 1;
    const threshold = width * 0.2; 

    if (dragDeltaX < -threshold) {
      nextImage();
    } else if (dragDeltaX > threshold) {
      prevImage();
    }

    setIsDragging(false);
    setDragDeltaX(0);
  };

  return (
    <div className="carousel-container" id="project3">
      <div className="carousel-wrapper">
        <button
          className="carousel-button prev"
          onClick={prevImage}
          aria-label="Previous image"
        >
          &#8249;
        </button>

        <div
          className="carousel-images"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`carousel-track ${isDragging ? 'dragging' : ''}`}
            style={{ transform: `translateX(${getTranslateX()}%)` }}
          >
            {images.map((imgData, idx) => (
              <img
                key={idx}
                src={imgData.url}
                alt={imgData.alt}
                className="carousel-image"
              />
            ))}
          </div>
        </div>

        <button
          className="carousel-button next"
          onClick={nextImage}
          aria-label="Next image"
        >
          &#8250;
        </button>
      </div>

      <div className="carousel-label">
        {images[currentIndex].desc}
      </div>

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

export default ImageCarousel;
