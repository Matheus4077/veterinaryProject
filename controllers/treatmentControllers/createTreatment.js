// Import necessary modules
const express = require('express');
const { Treatment } = require('../../db/models/modelSequelize'); // Import the Treatment model from Sequelize

// Create an Express router
const router = express.Router();

// Asynchronous function to create a new treatment
async function createTreatment(req, res) {
  // Destructure the data from the request body
  const {
    exams,                // Exams performed
    symptoms,             // Symptoms of the patient
    diagnosis,            // Diagnosis made
    recomendations,       // Recommendations for treatment
    isAlergic,           // Indicates if the patient is allergic
    alergicTo,           // What the patient is allergic to
    specialConditions,    // Special conditions of the patient
    dischargePreview,     // Expected discharge date
    dischargeNotes,       // Discharge notes
  } = req.body;

  try {
    // Attempt to create a new treatment using the destructured data
    const treatment = await Treatment.create({
      exams,
      symptoms,
      diagnosis,
      recomendations,
      isAlergic,
      alergicTo,
      specialConditions,
      dischargePreview,
      dischargeNotes,
    });
    // If creation is successful, return the created treatment with status 201
    res.status(201).json(treatment);
  } catch (error) {
    // If an error occurs, log the error message to the console
    console.error("Error creating treatment:", error);
    // Return an error response with status 400 and the error message
    res.status(400).json({ error: error.message });
  }
}

// Export the createTreatment function for use in other modules
module.exports = { createTreatment };
