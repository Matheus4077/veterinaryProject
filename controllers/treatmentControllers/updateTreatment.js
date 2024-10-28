// Importing necessary models from Sequelize
const { Treatment, Medication, PatientsDailyChart } = require('../../db/models/modelSequelize');

// Function to update an existing treatment
const updateTreatment = async (req, res) => {
    const { treatmentId } = req.params;
    const { treatmentData, medications, dailyCharts } = req.body;

    try {
        // Updating the treatment with new data
        await Treatment.update(treatmentData, { where: { id: treatmentId } });

        // Updating associated medications
        if (medications && medications.length > 0) {
            // Deleting old medications
            await Medication.destroy({ where: { treatmentId } });
            // Creating new medications associated with the treatment
            const meds = medications.map(med => ({ ...med, treatmentId }));
            await Medication.bulkCreate(meds);
        }

        // Updating associated daily charts
        if (dailyCharts && dailyCharts.length > 0) {
            // Deleting old charts
            await PatientsDailyChart.destroy({ where: { treatmentId } });
            // Creating new charts associated with the treatment
            const charts = dailyCharts.map(chart => ({ ...chart, treatmentId }));
            await PatientsDailyChart.bulkCreate(charts);
        }

        // Responding with a success message
        res.status(200).json({ message: 'Treatment updated successfully.' });
    } catch (error) {
        // Error handling when updating the treatment
        res.status(400).json({ error: error.message });
    }
};

// Exporting the function for use in other parts of the application
module.exports = { updateTreatment };