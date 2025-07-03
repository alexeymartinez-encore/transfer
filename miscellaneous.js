// seeders/populate_cost_codes.js
const Miscellaneous = require("../models/miscellaneous"); // Import the model
const { sequelize } = require("../config/db"); // Import the Sequelize instance

// Sample data for cost codes
const miscellaneousData = [
  {
    number: 0,
    description: "Nothing",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 1,
    description: "Meals",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 2,
    description: "Postage/Freight/Shipping",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 3,
    description: "Cell Phone",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 4,
    description: "Employee Education / Training",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 5,
    description: "Supplies / Part",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 6,
    description: "Employee Relations",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Function to populate the cost_codes table
const populateMisc = async () => {
  try {
    await sequelize.sync(); // Ensure the database and table are created
    await Miscellaneous.bulkCreate(miscellaneousData); // Insert the seed data into the table
    console.log("Misc codes have been successfully populated.");
  } catch (error) {
    console.error("Misc populating cost codes:", error);
  } finally {
    await sequelize.close(); // Close the connection to avoid hanging scripts
  }
};

populateMisc();
