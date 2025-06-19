import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 py-4 px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-orange-900 flex items-center gap-2" aria-label="FoodWagen Logo" role="img">
          <span className="text-3xl">🍔</span> FoodWagen
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition-colors shadow" aria-label="Add Meal">
          Add Meal
        </button>
      </div>
    </header>
  );
};

export default Header; 