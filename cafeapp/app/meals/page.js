import MealsGrid from "../../components/meals/MealsGrid"; // Adjust path as needed
import { getAllMeals } from "../../lib/meals";
import Link from "next/link";

export default async function MealsPage() {
  const meals = await getAllMeals();

  return (
    <div className="bg-black min-h-screen text-white">
      <main className="p-6 lg:px-8">
        <h1 className="mb-8 vertical-rl text-center text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] sm:text-6xl">
          Our Meals
        </h1>
        <div className="flex justify-center mb-8">
          <Link href="/meals/share">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#ff80b5] to-[#9089fc] hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-[#ff80b5] font-medium rounded-lg text-lg px-8 py-4"
            >
              Share Your Favorite Recipe
            </button>
          </Link>
        </div>
        <MealsGrid meals={meals} />
      </main>
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2024 Hakuna Matata Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
}
