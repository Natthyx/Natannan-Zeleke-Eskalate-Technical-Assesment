import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [deliveryType, setDeliveryType] = useState<'Delivery' | 'Pickup'>('Delivery');
  const [search, setSearch] = useState('');

  return (
    <section className="w-full bg-gradient-to-r from-orange-400 to-yellow-200 py-10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-xl">
        <div className="flex gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded-l-full font-semibold border border-orange-500 focus:outline-none transition-colors ${deliveryType === 'Delivery' ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'}`}
            aria-pressed={deliveryType === 'Delivery'}
            onClick={() => setDeliveryType('Delivery')}
          >
            Delivery
          </button>
          <button
            className={`px-4 py-2 rounded-r-full font-semibold border border-orange-500 focus:outline-none transition-colors ${deliveryType === 'Pickup' ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'}`}
            aria-pressed={deliveryType === 'Pickup'}
            onClick={() => setDeliveryType('Pickup')}
          >
            Pickup
          </button>
        </div>
        <form className="flex w-full shadow-lg rounded-full overflow-hidden bg-white" role="search" onSubmit={e => e.preventDefault()}>
          <input
            id="search-bar"
            className="flex-1 px-6 py-3 text-lg focus:outline-none"
            name="search"
            type="text"
            placeholder="What do you like to eat today?"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search for food"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 transition-colors" type="submit">
            Find Meal
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar; 