"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// Define a validation schema
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    price: parseFloat(formData.get("price")),
    image: formData.get("image"),
  };

  try {
    // Save the meal to your database
    await saveMeal(meal);

    // Redirect after successful save
    redirect("/meals");
  } catch (err) {
    // Handle errors
    return { errors: err.errors };
  }
}
