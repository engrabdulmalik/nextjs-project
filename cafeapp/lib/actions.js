"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  // Handle form data submission

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    price: formData.get("price"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

  try {
    await saveMeal(meal); // Ensure saveMeal is complete

    redirect("/meals"); // Perform server-side redirection
  } catch (err) {
    console.error("Error saving meal:", err); // Log the error for debugging
    // Handle errors appropriately, e.g., display an error message to the user
  }
}
