import { getMealBySlug } from "../../../lib/meals";

export async function generateMetadata({ params }) {
  const meal = await getMealBySlug(params.slug);
  return {
    title: meal?.title ?? "Meal Details",
  };
}

export default async function MealDetails({ params }) {
  const meal = await getMealBySlug(params.slug);

  if (!meal) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Meal not found
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl w-full bg-gradient-to-r from-[#ff80b5] to-[#9089fc] rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={meal.image}
            alt={meal.title}
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-8"
          />
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold mb-4">{meal.title}</h1>
            <p className="text-lg mb-4">{meal.summary}</p>
            <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
            <p className="list-disc list-inside mb-4">{meal.instructions}</p>
            <p className="text-lg font-semibold">
              Created by: {meal.creator} ({meal.creator_email})
            </p>
            <p className="text-lg font-semibold">
              Price: ${Number(meal.price).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
