"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import * as yup from "yup";

// Define a validation schema
const mealSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Title must be at least 3 characters long")
    .required("Title is required"),
  summary: yup
    .string()
    .min(4, "Summary must be at least 10 characters long")
    .required("Summary is required"),
  instructions: yup
    .string()
    .min(4, "Instructions must be at least 10 characters long")
    .required("Instructions are required"),
  creator: yup.string().required("Creator is required"),
  creator_email: yup
    .string()
    .email("Invalid email format")
    .required("Creator email is required"),
  price: yup
    .number()
    .positive("Price must be a positive number")
    .required("Price is required"),
  image: yup.string().required("Image is required"),
});

export async function shareMeal(formData) {
  console.log("formData", formData);
  // Create the meal object from FormData
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
    // Validate meal data
    await mealSchema.validate(meal, { abortEarly: false });

    // Save the meal to your database
    await saveMeal(meal);

    // Redirect after successful save
    redirect("/meals");
  } catch (err) {
    // Handle validation errors
    return { errors: err.errors };
  }
}
