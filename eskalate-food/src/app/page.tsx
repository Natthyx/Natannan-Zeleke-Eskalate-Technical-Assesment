'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FoodList from '../components/FoodList';

interface Food {
  foodName: string;
  foodPrice: string;
  foodRating: number;
  foodImage: string;
  restaurantName: string;
  restaurantLogo: string;
  restaurantStatus: 'Open Now' | 'Closed';
  id: string;
}

export default function HomePage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFoods() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://6852821e0594059b23cdd834.mockapi.io/Food');
        if (!res.ok) throw new Error('Failed to fetch foods');
        const data: unknown[] = await res.json();
        const mapped = (Array.isArray(data) ? data : []).map((item) => {
          if (typeof item === 'object' && item !== null) {
            const obj = item as Record<string, unknown>;
            return {
              foodName: String(obj.name ?? ''),
              foodPrice: String(obj.price ?? ''),
              foodRating: Number(obj.rating ?? 0),
              foodImage: String(obj.image ?? ''),
              restaurantName: String(obj.restaurantName ?? ''),
              restaurantLogo: String(obj.restaurantLogo ?? ''),
              restaurantStatus: obj.restaurantStatus === 'Open Now' ? 'Open Now' : 'Closed',
              id: String(obj.id ?? ''),
            };
          }
          return null;
        }).filter(Boolean) as Food[];
        setFoods(mapped);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError('Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchFoods();
  }, []);

  return (
    <main className="min-h-screen bg-[#fffbe6] flex flex-col">
      <Header />
      <HeroSection />
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Featured Meals</h2>
        {loading && <div className="text-center text-gray-400 py-8">Loading...</div>}
        {error && <div className="text-center text-red-500 py-8">{error}</div>}
        {!loading && !error && <FoodList foods={foods} />}
      </section>
      <div className="flex justify-center py-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors flex items-center gap-2">
          Load more <span className="text-xl">&gt;</span>
        </button>
      </div>
      <footer className="bg-gray-900 text-gray-200 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>Terms & Conditions</li>
              <li>Refund & Cancellation</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex gap-3 mb-4">
              <span className="bg-gray-800 p-2 rounded-full"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" /></svg></span>
              <span className="bg-gray-800 p-2 rounded-full"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.454-.676-6.263-1.84.322.038.637.05.972.05 1.92 0 3.684-.654 5.093-1.755-1.797-.037-3.316-1.22-3.84-2.85.25.037.5.062.763.062.366 0 .73-.05 1.07-.142-1.87-.375-3.28-2.03-3.28-4.017v-.05c.55.305 1.18.49 1.85.513a4.13 4.13 0 0 1-1.84-3.44c0-.762.2-1.48.55-2.095a11.62 11.62 0 0 0 8.42 4.27c-.062-.305-.1-.62-.1-.95a4.13 4.13 0 0 1 7.14-3.76 8.18 8.18 0 0 0 2.62-1c-.087.27-.27.5-.5.65a4.13 4.13 0 0 1-1.87.513 8.23 8.23 0 0 0 2.37-2.07z" /></svg></span>
              <span className="bg-gray-800 p-2 rounded-full"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" /></svg></span>
            </div>
            <form className="flex">
              <input className="flex-1 px-3 py-2 rounded-l bg-gray-800 text-gray-100 focus:outline-none" placeholder="Enter Your email" />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r font-semibold">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">All rights Reserved © Your Company, 2021</div>
      </footer>
    </main>
  );
}
