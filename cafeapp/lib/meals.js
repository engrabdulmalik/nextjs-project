// meals.js
const db = require("../db");

// Fetch all meals
const getAllMeals = async () => {
  try {
    const meals = await db("meals").select("*");
    return meals;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
};

// Fetch a meal by ID
const getMealById = async (id) => {
  try {
    const meal = await db("meals").where({ id }).first();
    return meal;
  } catch (error) {
    console.error(`Error fetching meal with ID ${id}:`, error);
    throw error;
  }
};

// Fetch a meal by slug
const getMealBySlug = async (slug) => {
  try {
    const meal = await db("meals").where({ slug }).first();
    return meal;
  } catch (error) {
    console.error(`Error fetching meal with slug ${slug}:`, error);
    throw error;
  }
};

module.exports = {
  getAllMeals,
  getMealById,
  getMealBySlug,
};
