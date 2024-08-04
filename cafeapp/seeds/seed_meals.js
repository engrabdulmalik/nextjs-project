/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("meals")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("meals").insert([
        {
          slug: "spaghetti-carbonara",
          title: "Spaghetti Carbonara",
          price: "$12.99",
          image: "/assets/dumplings.jpg",
          summary: "Creamy pasta with pancetta and Parmesan.",
          instructions:
            "Boil spaghetti. Cook pancetta. Mix with cream and Parmesan.",
          creator: "Chef Luigi",
          creator_email: "chef.luigi@example.com",
        },
        {
          slug: "margherita-pizza",
          title: "Margherita Pizza",
          price: "$10.99",
          image: "/assets/pizza.jpg",
          summary: "Classic pizza with fresh basil and mozzarella.",
          instructions: "Prepare dough. Add sauce, cheese, and basil. Bake.",
          creator: "Chef Mario",
          creator_email: "chef.mario@example.com",
        },
        // Add more meals as needed
      ]);
    });
};