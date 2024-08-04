// components/MealItem.jsx
import Link from "next/link";
import Image from "next/image"; // Import Image from Next.js

const MealItem = ({ meal }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <Image
        src={meal.image}
        alt={meal.name}
        width={500} // Specify the width of the image
        height={250} // Specify the height of the image
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{meal.name}</h2>
        <p className="text-gray-300">{meal.description}</p>
        <p className="text-lg font-semibold mt-2">{meal.price}</p>
        <Link
          href={`/meals/${meal.slug}`} // Adjust path as needed
          className="mt-4 block text-blue-400 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MealItem;
