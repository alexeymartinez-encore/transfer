// seeders/populate_colors.js
const Color = require("../models/color"); // Import the model
const { sequelize } = require("../config/db"); // Import the Sequelize instance

// Sample data for colors
const colorsData = [
  {
    color_name: "White Smoke",
    color_code: "#F5F5F5",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Light Gray",
    color_code: "#D3D3D3",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Slate Gray",
    color_code: "#708090",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Sky Blue",
    color_code: "#87CEEB",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Dodger Blue",
    color_code: "#1E90FF",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Steel Blue",
    color_code: "#4682B4",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Lime Green",
    color_code: "#32CD32",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Forest Green",
    color_code: "#228B22",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Golden Rod",
    color_code: "#DAA520",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Orange Red",
    color_code: "#FF4500",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Tomato",
    color_code: "#FF6347",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Deep Pink",
    color_code: "#FF1493",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Medium Violet Red",
    color_code: "#C71585",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Dark Violet",
    color_code: "#9400D3",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Indigo",
    color_code: "#4B0082",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Medium Purple",
    color_code: "#9370DB",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Rosy Brown",
    color_code: "#BC8F8F",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Saddle Brown",
    color_code: "#8B4513",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Sandy Brown",
    color_code: "#F4A460",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    color_name: "Light Coral",
    color_code: "#F08080",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Function to populate the colors table
const populateColors = async () => {
  try {
    await sequelize.sync(); // Ensure the database and table are created
    await Color.bulkCreate(colorsData); // Insert the seed data into the table
    console.log("Colors have been successfully populated.");
  } catch (error) {
    console.error("Error populating Colors:", error);
  } finally {
    await sequelize.close(); // Close the connection to avoid hanging scripts
  }
};

populateColors();
