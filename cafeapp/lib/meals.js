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
    let slug = slugify(meal.title, { lower: true });

    // Check if a meal with the same slug already exists
    let existingMeal = await db("meals").where({ slug }).first();

    // If a meal with the same slug exists, generate a unique slug
    if (existingMeal) {
      let counter = 1;
      let newSlug = `${slug}-${counter}`;
      while (existingMeal) {
        existingMeal = await db("meals").where({ slug: newSlug }).first();
        if (!existingMeal) {
          slug = newSlug;
          break;
        }
        counter++;
        newSlug = `${slug}-${counter}`;
      }
    }

    meal.slug = slug;
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

  meal.image = `/assets/${fileName}`;
  return db("meals").insert(meal);
}
