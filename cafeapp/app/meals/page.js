"use client"; // Ensure client-side rendering for dynamic content

import { useEffect, useState } from "react";
import MealsGrid from "../../components/meals/MealsGrid"; // Adjust path as needed

const mealsData = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    slug: "spaghetti-carbonara",
    description: "Creamy pasta with pancetta and Parmesan.",
    price: "$12.99",
    image: "/assets/dumplings.jpg",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    slug: "margherita-pizza",
    description: "Classic pizza with fresh basil and mozzarella.",
    price: "$10.99",
    image: "/assets/pizza.jpg",
  },
  // Add more meal items here
];

const MealsPage = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Here you can fetch the data from an API if needed
    setMeals(mealsData);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <main className="p-6 lg:px-8">
        <h1 className="mb-8 vertical-rl text-center text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] sm:text-6xl">
          Our Meals
        </h1>
        <MealsGrid meals={meals} />
      </main>
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2024 Hakuna Matata Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MealsPage;
