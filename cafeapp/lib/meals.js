// meals.js
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = require("../db");

// Fetch all meals
export const getAllMeals = async () => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000); // Simulate a delay of 1 second for demonstration purposes
    });

    const meals = await db("meals").select("*");
    return meals;
  } catch (error) {
    throw error;
  }
};

// Fetch a meal by ID
export const getMealById = async (id) => {
  try {
    const meal = await db("meals").where({ id }).first();
    return meal;
  } catch (error) {
    console.error(`Error fetching meal with ID ${id}:`, error);
    throw error;
  }
};

// Fetch a meal by slug
export const getMealBySlug = async (slug) => {
  try {
    const meal = await db("meals").where({ slug }).first();
    return meal;
  } catch (error) {
    console.error(`Error fetching meal with slug ${slug}:`, error);
    throw error;
  }
};

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/assets/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Error saving image");
    }
  });

  meal.image = `assets/${fileName}`;
  return db("meals").insert(meal);
}
