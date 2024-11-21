// Importing Express and other necessary dependencies
const express = require('express');
require("dotenv").config(); // Loading environment variables
const { sequelize } = require('./db/models/modelSequelize'); // Importing database connection
const treatmentRoutes = require('./routes/treatmentRoutes'); // Importing treatment routes
const medicationRoutes = require('./routes/medicationRutes');
const app = express(); // Creating an Express application
const port = 3000; // Setting the server port

app.use(express.json()); // Middleware to parse JSON in requests

// Basic test route
app.get("/", (req, res) => {
    res.send("Hello World!"); // Simple response for the root route
});

// Using treatment routes
app.use('/treatment', treatmentRoutes);
app.use('/medication', medicationRoutes);

// Synchronizing models with the database
sequelize.sync() // REMOVE 'force: true' in production
    .then(() => {
        console.log('Tables created successfully.');
    })
    .catch((error) => {
        console.log("Failed to connect to the database: " + error);
    });

// Starting the server
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    try {
        await sequelize.authenticate(); // Testing database connection
        console.log('Connected to the database!'); // Success message
    } catch (error) {
        console.error('Error connecting to the database:', error); // Error message
    }
});