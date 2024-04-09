import React, { useState, useEffect } from 'react';
import './styles.css';
import slider1 from "/img/wp3701651-luxury-homes-wallpapers.jpg";
import slider2 from "/img/wp3701682-luxury-homes-wallpapers.jpg";
import slider3 from "/img/wp6671464-luxury-life-wallpapers.jpg";
import slider4 from "/img/wp7733723-luxury-home-wallpapers.jpg";
import slider5 from "/img/Canada_Morning_Houses_Marinas_Boats_Yacht_594690_1280x594.jpg";


const realEstateImages = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
];

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === realEstateImages.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider w-full h-full object-cover">
      {realEstateImages.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Real Estate ${i + 1}`}
          className={i === index ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default App;
