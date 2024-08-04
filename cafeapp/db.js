// db.js
const knex = require("knex");
const knexConfig = require("./knexfile");

const environment = process.env.NODE_ENV || "development"; // Default to development
const db = knex(knexConfig[environment]);

module.exports = db;
