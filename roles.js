// seeders/populate_cost_codes.js
const Roles = require("../models/role"); // Import the model
const { sequelize } = require("../config/db"); // Import the Sequelize instance

// Sample data for cost codes
const rolesData = [
  {
    role_name: "Employee",
    description: "This is a regular employee, with regular permissions",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    role_name: "Manager",
    description: "This is a manager, with manager permissions",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    role_name: "Admin",
    description: "This is an admin, with full permissions",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Function to populate the cost_codes table
const populateRoles = async () => {
  try {
    await sequelize.sync(); // Ensure the database and table are created
    await Roles.bulkCreate(rolesData); // Insert the seed data into the table
    console.log("Cost codes have been successfully populated.");
  } catch (error) {
    console.error("Error populating cost codes:", error);
  } finally {
    await sequelize.close(); // Close the connection to avoid hanging scripts
  }
};

populateRoles();
