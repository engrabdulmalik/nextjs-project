/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("meals", function (table) {
    table.increments("id"); // Primary key, auto-incremented
    table.string("slug").notNullable().unique(); // Unique and required
    table.string("title").notNullable(); // Required
    table.string("price"); // Optional
    table.string("image").notNullable(); // Required
    table.text("summary").notNullable(); // Required
    table.text("instructions").notNullable(); // Required
    table.string("creator").notNullable(); // Required
    table.string("creator_email").notNullable(); // Required
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("meals");
};