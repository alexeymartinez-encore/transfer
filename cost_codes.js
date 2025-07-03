// seeders/populate_cost_codes.js
const CostCode = require("../models/cost_code"); // Import the model
const { sequelize } = require("../config/db"); // Import the Sequelize instance

// Sample data for cost codes
const costCodesData = [
  {
    cost_code: 0,
    description: "Nothing",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 50,
    description: "Project Management",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 100,
    description: "Control Eng/Design",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 200,
    description: "Mech Eng/Design",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 300,
    description: "Software - MMI/PLC/Embedded",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 400,
    description: "Embedded Software",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 425,
    description: "Simulation - Layout, Reach Study, Meachine Feasible",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 475,
    description: "Install / Commissioning",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 500,
    description: "Process / Robot Prog. / Offline Prog.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 600,
    description: "Service / Standby / Warranty",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 700,
    description: "Documentation / Training",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 800,
    description: "Administration",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 825,
    description: "Product Development",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 900,
    description: "Manufacturing",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 925,
    description: "Shop Labor - Fab / Assembly / Inspection",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 950,
    description: "Paid Time Off",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 960,
    description: "Unpaid Time Off",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 975,
    description: "Project Overhead",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 976,
    description: "Sales",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 977,
    description: "Proposals",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 980,
    description: "Formal Training",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cost_code: 999,
    description: "Unallocated",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Function to populate the cost_codes table
const populateCostCodes = async () => {
  try {
    await sequelize.sync(); // Ensure the database and table are created
    await CostCode.bulkCreate(costCodesData); // Insert the seed data into the table
    console.log("Cost codes have been successfully populated.");
  } catch (error) {
    console.error("Error populating cost codes:", error);
  } finally {
    await sequelize.close(); // Close the connection to avoid hanging scripts
  }
};

populateCostCodes();
