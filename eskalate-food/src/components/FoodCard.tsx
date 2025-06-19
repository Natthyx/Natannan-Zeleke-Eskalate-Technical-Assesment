import React from 'react';

interface FoodCardProps {
  foodName: string;
  foodPrice: string;
  foodRating: number;
  foodImage: string;
  restaurantName: string;
  restaurantLogo: string;
  restaurantStatus: 'Open Now' | 'Closed';
}

const FoodCard: React.FC<FoodCardProps> = ({
  foodName,
  foodPrice,
  foodRating,
  foodImage,
  restaurantName,
  restaurantLogo,
  restaurantStatus,
}) => {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col relative group transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative">
        <img src={foodImage} alt={foodName} className="w-full h-40 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{foodPrice}</span>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1 truncate">{foodName}</h3>
          <div className="flex items-center gap-2 mb-2">
            <img src={restaurantLogo} alt={restaurantName} className="w-6 h-6 rounded-full border border-gray-200" />
            <span className="restaurant-name text-sm font-medium text-gray-700">{restaurantName}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="restaurant-rating text-yellow-500 font-bold flex items-center gap-1"><span>⭐</span>{foodRating}</span>
          <span className={`restaurant-status text-xs font-semibold px-3 py-1 rounded-full ${restaurantStatus === 'Open Now' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}>{restaurantStatus}</span>
        </div>
      </div>
    </article>
  );
};

export default FoodCard; 