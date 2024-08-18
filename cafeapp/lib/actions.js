"use server";
import { redirect } from "next/navigation";
import { saveMeal, findMealBySlug } from "./meals"; // Import a function to find a meal by slug
import * as yup from "yup";
import slugify from "slugify"; // Import a utility to create slugs

// Yup validation schema
const mealSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),
  instructions: yup.string().required("Instructions are required"),
  summary: yup.string().required("Summary is required"),
  image: yup.string().required("Image is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  creator: yup.string().required("Creator name is required"),
  creator_email: yup
    .string()
    .email("Invalid email")
    .required("Creator email is required"),
});

export async function shareMeal(formData) {
  // Generate slug from title
  const slug = slugify(formData.get("title"), { lower: true });

  // Create meal object from form data
  const meal = {
    title: formData.get("title"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    price: formData.get("price"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    slug, // Add the generated slug to the meal object
  };

  try {
    // Validate meal data against the schema
    await mealSchema.validate(meal, { abortEarly: false });

    // If valid and slug is unique, save the meal
    await saveMeal(meal);
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      // Return validation errors to the frontend
      return { errors: err.errors };
    } else {
      // Log other types of errors
      console.error("An error occurred while saving the meal:", err);

      // Return a meaningful error message to the frontend
      return {
        errors: ["An unexpected error occurred. Please try again later."],
      };
    }
  }
  // Redirect only after successful save and validation
  redirect("/meals");
}
