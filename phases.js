// seeders/populate_cost_codes.js
const Phase = require("../models/phase"); // Import the model
const { sequelize } = require("../config/db"); // Import the Sequelize instance

// Sample data for cost codes
const phasesData = [
  {
    number: 0,
    description: "Nothing",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 100,
    description: "Project Management",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 200,
    description: "Engineering",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 300,
    description: "Staging / Mod Build",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 400,
    description: "Install / Commission",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 500,
    description: "System Debug",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 600,
    description: "Startup & Tune In",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 700,
    description: "Prod. Support",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 800,
    description: "Closeout / Prod. Support",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 900,
    description: "Sales & Administration",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 950,
    description: "Paid Time Off",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 960,
    description: "Unpaid Time Off",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    number: 999,
    description: "Unallocated",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Function to populate the cost_codes table
const populatePhases = async () => {
  try {
    await sequelize.sync(); // Ensure the database and table are created
    await Phase.bulkCreate(phasesData); // Insert the seed data into the table
    console.log("Cost codes have been successfully populated.");
  } catch (error) {
    console.error("Error populating cost codes:", error);
  } finally {
    await sequelize.close(); // Close the connection to avoid hanging scripts
  }
};

populatePhases();
