// components/MealsGrid.jsx
import MealItem from "./MealItem"; // Adjust path as needed

const MealsGrid = ({ meals }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default MealsGrid;
