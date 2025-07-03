// seeders/populate_cost_codes.js
const Event = require("../models/event"); // Import the model
const { sequelize } = require("../config/db"); // Import the Sequelize instance

// Sample data for cost codes
const customerData = [
  {
    employee_id: 1,
    start: new Date(),
    end: new Date(),
    title: "Alex Vac",
    long_description: "Vacation",
    back_color_id: "#000f20",
    fore_color_id: "#DFDFDF",
    formatted_month: "2025Jan",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   long_description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   back_color_id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   fore_color_id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   formatted_month: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },

// Function to populate the cost_codes table
const populateCustomers = async () => {
  try {
    await sequelize.sync(); // Ensure the database and table are created
    await Event.bulkCreate(customerData); // Insert the seed data into the table
    console.log("Cost codes have been successfully populated.");
  } catch (error) {
    console.error("Error populating cost codes:", error);
  } finally {
    await sequelize.close(); // Close the connection to avoid hanging scripts
  }
};

populateCustomers();
