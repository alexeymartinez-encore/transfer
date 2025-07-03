// seeders/populate_cost_codes.js
const Customers = require("../models/customer"); // Import the model
const { sequelize } = require("../config/db"); // Import the Sequelize instance

// Sample data for cost codes
const customerData = [
  // {
  //   name: "Encore Automation",
  //   contact: "(123)-456-7890",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
  // {
  //   name: "Honda",
  //   contact: "(123)-456-7890",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
  {
    name: "Tesla",
    contact: "(123)-456-7890",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Stellantis",
    contact: "(123)-456-7890",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Liberty City",
    contact: "(123)-456-7890",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Function to populate the cost_codes table
const populateCustomers = async () => {
  try {
    await sequelize.sync(); // Ensure the database and table are created
    await Customers.bulkCreate(customerData); // Insert the seed data into the table
    console.log("Cost codes have been successfully populated.");
  } catch (error) {
    console.error("Error populating cost codes:", error);
  } finally {
    await sequelize.close(); // Close the connection to avoid hanging scripts
  }
};

populateCustomers();
