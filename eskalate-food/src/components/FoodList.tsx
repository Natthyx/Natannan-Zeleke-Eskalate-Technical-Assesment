import React from 'react';
import FoodCard from './FoodCard';

interface Food {
  foodName: string;
  foodPrice: string;
  foodRating: number;
  foodImage: string;
  restaurantName: string;
  restaurantLogo: string;
  restaurantStatus: 'Open Now' | 'Closed';
}

interface FoodListProps {
  foods: Food[];
}

const FoodList: React.FC<FoodListProps> = ({ foods }) => {
  if (!foods.length) {
    return <div className="empty-state-message text-center text-gray-400 py-12 text-lg">No items available</div>;
  }
  return (
    <section className="food-list w-full max-w-7xl mx-auto px-4 py-8">
      <div className="food-list__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {foods.map((food, idx) => (
          <FoodCard key={idx} {...food} />
        ))}
      </div>
    </section>
  );
};

export default FoodList; 