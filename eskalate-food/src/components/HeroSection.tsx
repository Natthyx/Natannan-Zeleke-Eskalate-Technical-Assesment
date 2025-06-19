import React from 'react';
import SearchBar from './SearchBar';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 min-h-[400px] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 relative overflow-hidden">
      <div className="flex-1 flex flex-col items-start justify-center z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Are you starving?</h1>
        <p className="text-lg md:text-xl text-white mb-8 drop-shadow">Within a few clicks, find meals that are accessible near you</p>
        <div className="w-full max-w-xl">
          <SearchBar />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center z-10 mt-10 md:mt-0">
        <img
          src="/placeholder-bowl.png"
          alt="Bowl of noodles"
          className="w-72 h-72 object-cover rounded-full shadow-2xl border-8 border-yellow-200 bg-white"
        />
      </div>
      {/* Decorative background circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-200 rounded-full opacity-30 z-0 hidden md:block" />
    </section>
  );
};

export default HeroSection; 