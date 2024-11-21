const express = require('express');
const router = express.Router();

const { createMedication, getMedicationById, getMedicationByName, getAllMedication, } = require('../exports/medicationExports');

router.post('/', createMedication);
router.get('/', getAllMedication);
router.get('/:id', getMedicationById);
router.get('/:name', getMedicationByName);

module.exports = router;