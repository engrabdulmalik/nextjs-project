"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  // Handle form data submission

  const meal = {
    title: formData.get("title"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    price: formData.get("price"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

  await saveMeal(meal); // Ensure saveMeal is complete

  redirect("/meals"); // Perform server-side redirection
}
