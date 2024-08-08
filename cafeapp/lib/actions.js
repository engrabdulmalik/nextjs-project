"use server";
import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";
export async function shareMeal (formData) {


  // Create the meal object from FormData
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    price: formData.get("price"),
    image: formData.get("image"),
  };

  // Save the meal to your database
  await saveMeal(meal);
  redirect('/meals');

  // Here you would typically send `formData` to your server
};