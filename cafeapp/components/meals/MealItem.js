// components/MealItem.jsx
import Link from "next/link";
import Image from "next/image"; // Import Image from Next.js

const MealItem = ({ meal }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
      <Image
        src={meal.image}
        alt={meal.title}
        width={500} // Specify the width of the image
        height={250} // Specify the height of the image
        className="w-full h-40 object-cover"
        priority
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold">{meal.title}</h2>
        <p className="text-gray-300 flex-grow">{meal.summary}</p>
        <p className="text-lg font-semibold mt-2">$ {meal.price}</p>
        <div className="mt-4">
          <Link
            href={`/meals/${meal.slug}`} // Adjust path as needed
          >
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#ff80b5] to-[#9089fc] hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-[#ff80b5] font-medium rounded-lg text-sm px-4 py-2"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
