import ImageUpload from "@/components/meals/image-upload";
import { shareMeal } from "@/lib/actions";

const ShareMealPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] sm:text-6xl">
        Share Your Meal
      </h1>
      <form
        action={shareMeal}
        className="w-full max-w-5xl bg-gradient-to-r from-[#ff80b5] to-[#9089fc] p-8 rounded-lg shadow-lg text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block font-semibold mb-2 text-gradient"
            >
              Meal Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="slug"
              className="block font-semibold mb-2 text-gradient"
            >
              Meal Slug
            </label>
            <input
              id="slug"
              name="slug"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div className="mb-4 col-span-1">
            <label
              htmlFor="summary"
              className="block font-semibold mb-2 text-gradient"
            >
              Meal Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              className="w-full p-3 border border-gray-300 rounded-lg text-black resize-none"
              rows="5"
              required
            />
          </div>
          <div className="mb-4 col-span-1">
            <label
              htmlFor="instructions"
              className="block font-semibold mb-2 text-gradient"
            >
              Meal Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              className="w-full p-3 border border-gray-300 rounded-lg text-black resize-none"
              rows="5"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="creator"
              className="block font-semibold mb-2 text-gradient"
            >
              Creator Name
            </label>
            <input
              id="creator"
              name="creator"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="creator_email"
              className="block font-semibold mb-2 text-gradient"
            >
              Creator Email
            </label>
            <input
              id="creator_email"
              name="creator_email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block font-semibold mb-2 text-gradient"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              step="0.01"
              required
            />
          </div>
          <ImageUpload name={"image"} />
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded-lg text-white bg-gradient-to-r from-[#9b59b6] to-[#3498db] shadow-md hover:from-[#3498db] hover:to-[#9b59b6] transition-colors duration-300 transform hover:scale-105"
        >
          Share Meal
        </button>
      </form>
    </div>
  );
};

export default ShareMealPage;
