"use client";
import { useFormStatus } from "react-dom";
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-center">
      <button
        disabled={pending}
        type="submit"
        className="text-white bg-gradient-to-r from-[#ff80b5] to-[#9089fc] hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-[#ff80b5] font-medium rounded-lg text-lg px-8 py-4"
      >
        {pending ? "Submitting..." : "Share Meal"}
      </button>
    </div>
  );
}
