import React, { useState } from 'react';

const images = [
    '/img/banner/airplane-8892881_1280.jpg',
    '/img/banner/CHAINE 1.png',
    '/img/banner/Image1_yellow.png',
    '/img/banner/industry-2023592_960.png',
    '/img/banner/large-truck-carrying-sand-platinum-mining.png',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Slide container */}
      <div
        className="flex transition-transform duration-200 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
            <div key={index} className="w-full shrink-0">
                <img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[75vh] lg:h-[90vh]  w-full object-cover object-top brightness-50"
                />
           </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="hidden absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="hidden absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
