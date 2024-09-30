import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-24">
      {/* Background overlay and animated shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full opacity-30 blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-60 h-60 bg-indigo-600 rounded-full opacity-30 blur-2xl animate-spin-slow"></div>
      </div>

      <div className="relative container mx-auto flex flex-col items-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center leading-tight tracking-wide">
          Unleash Your Inner Athlete
        </h1>
        <p className="text-lg md:text-2xl mb-10 text-center max-w-2xl leading-relaxed">
          Discover a wide range of sports, hone your skills, and become part of a thriving
          community. Take your athletic abilities to the next level!
        </p>

        {/* Image Grid with hover effects */}
        <div className="grid grid-cols-2 gap-6 lg:gap-8 transform hover:scale-105 transition duration-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtW4BT9WP94_yLD9CZ5CWPK7t_yssP64WoXQ&s"
            alt="Sport Image 1"
            className="w-full h-64 object-cover rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq6b5FUfgOexWWNB486lGuKDnoxsWZFUWdQ&s"
            alt="Sport Image 2"
            className="w-full h-64 object-cover rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNj30YpfsjJYC5xtXvg4tTPP7SHMWMtGHJyQ&s"
            alt="Sport Image 3"
            className="w-full h-64 object-cover rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1F3YLkMmfqiOmLrqHLbj8p1IGWrueKAgwA&s"
            alt="Sport Image 4"
            className="w-full h-64 object-cover rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
