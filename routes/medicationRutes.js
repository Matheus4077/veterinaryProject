const express = require('express');
const router = express.Router();

const { createMedication, getMedicationById, getMedicationByName, getAllMedication, updateMedication } = require('../exports/medicationExports');

router.post('/', createMedication);
router.get('/', getAllMedication);
router.get('/:id', getMedicationById);
router.get('/name/:name', getMedicationByName);
router.put('/:id', updateMedication);

module.exports = router;