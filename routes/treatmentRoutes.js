// Importing Express and creating a router
const express = require('express');
const router = express.Router();

// Importing CRUD functions for treatment
const { createTreatment } = require('../controllers/treatmentControllers/createTreatment');
const { readTreatmentById, readTreatmentByPetName, readTreatmentByTutorName, readAllTreatments } = require('../controllers/treatmentControllers/readTreatment');
const { updateTreatment } = require('../controllers/treatmentControllers/updateTreatment');
const { deleteTreatment } = require('../controllers/treatmentControllers/deleteTreatment');

// Defining routes for treatment CRUD operations
router.post('/', createTreatment); // Create a new treatment
router.get('/id/:treatmentId', readTreatmentById); // Read treatment by ID
router.get('/pet/:petName', readTreatmentByPetName); // Read treatment by pet's name
router.get('/tutor/:tutorName', readTreatmentByTutorName); // Read treatment by tutor's name
router.get('/treatments', readAllTreatments); // Read all treatments
router.put('/:treatmentId', updateTreatment); // Update an existing treatment
router.delete('/:treatmentId', deleteTreatment); // Delete a treatment

// Exporting the router for use in other parts of the application
module.exports = router;