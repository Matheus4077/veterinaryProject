const { createMedication } = require('../controllers/medicationControllers/createMedications');
const { getMedicationById, getMedicationByName, getAllMedication } = require('../controllers/medicationControllers/readMedications');
const { updateMedication } = require('../controllers/medicationControllers/updateMedications');

module.exports = {
    createMedication,
    getMedicationById,
    getMedicationByName,
    getAllMedication,
    updateMedication,
};