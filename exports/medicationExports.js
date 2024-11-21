const { createMedication } = require('../controllers/medicationControllers/createMedications');
const { getMedicationById, getMedicationByName, getAllMedication } = require('../controllers/medicationControllers/readMedications');

module.exports = {
    createMedication,
    getMedicationById,
    getMedicationByName,
    getAllMedication,
};