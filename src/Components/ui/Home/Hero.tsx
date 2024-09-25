import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white text-gray-800 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Unleash Your Inner Athlete
        </h1>
        <p className="text-2xl mb-6 text-center">
          Join us to explore a variety of sports and improve your skills. Be part of the community!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtW4BT9WP94_yLD9CZ5CWPK7t_yssP64WoXQ&s"
            alt="Sport Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq6b5FUfgOexWWNB486lGuKDnoxsWZFUWdQ&s"
            alt="Sport Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNj30YpfsjJYC5xtXvg4tTPP7SHMWMtGHJyQ&s"
            alt="Sport Image 3"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1F3YLkMmfqiOmLrqHLbj8p1IGWrueKAgwA&s"
            alt="Sport Image 4"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
