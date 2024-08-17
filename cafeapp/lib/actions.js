"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
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
    const result = await saveMeal(meal);

    if (result.rowCount === 1) {
      // Server-side redirection after successful save
      redirect("/meals");
    } else {
      console.error("Failed to save meal: No rows affected");
      return {
        status: 500,
        body: "Failed to save meal: No rows affected",
      };
    }
  } catch (err) {
    console.error("Error saving meal:", err);
    return {
      status: 500,
      body: "Error saving meal",
    };
  }
}
