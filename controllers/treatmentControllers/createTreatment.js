/* // Importing necessary models from Sequelize
const {Treatment, Medication, PatientsDailyChart} = require("../../db/models/modelSequelize");

// Function to create a new treatment
const createTreatment = async (req, res) => {
    // Destructuring data from the request doby
    const { treatment, medication, dailyCharts } = req.body;

    try {
        // Creating a new treatmente in database
        const   treatments = await Treatment.create(treatment);
        // If there are medications, associate them with the treatment 
        if (medication && medication.length > 0){
            const meds = medication.map(med => ({ ...med, treatmentId: treatment.id}));
            await Medication.bulkCreate(meds);
        }
        // If there are daily charts, associate them with the treatment
        if (dailyCharts && dailyCharts.length > 0) {
            const charts = dailyCharts.map(chart => ({...chart, treatmentId: treatment.id}));
            await PatientsDailyChart.bulkCreate(charts);
        }
        // Responding with the created treatment
        res.status(201).json({treatment, medication, dailyCharts});
      } catch(error){
        // Error handling when creating the treatment
        res.status(400).json({error: error.message}).send(error); 
    }
};
// Exporting the function for use in other parts of the application
module.exports = {createTreatment}; */
// routes/treatment.js

const express = require('express');
const { Treatment } = require('../../db/models/modelSequelize'); // Ajuste o caminho conforme sua estrutura

const router = express.Router();

// Rota POST para criar um novo tratamento
async function createTreatment(req, res){
  const {
    exams,
    symptoms,
    diagnosis,
    recomendations,
    isAlergic,
    alergicTo,
    specialConditions,
    dischargePreview,
    dischargeNotes,
  } = req.body;

  try {
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
    res.status(201).json(treatment);
  } catch (error) {
    console.error("Erro ao criar tratamento:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {createTreatment};
