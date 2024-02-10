const express = require('express');
const Perfil = require('../models/perfil'); // Adjust the path as necessary

const router = express.Router();

// Route to create Perfil documents - Adjust according to your actual use case
// This example assumes you want to populate the database with initial data.
// In a real application, you might have a form submission or an API endpoint for this.
router.post('/create', async (req, res) => {
    try {
        const profiles = [
            // Add your profiles here
        ];
        await Perfil.create(profiles);
        res.status(201).send('Profiles created successfully.');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Route to list all Perfil documents
router.get('/', async (_, res) => {
    try {
        const perfis = await Perfil.find({});
        res.render('perfil/index', { perfis });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
