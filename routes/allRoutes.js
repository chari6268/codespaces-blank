const express = require('express');
const router = express.Router();

const schema = require('../models/schema');

// get all records
router.get('/', async (req, res) => {
    try {
        const records = await schema.find();
        res.json(records);
    } catch (error) {
        res.status(500).send('Error retrieving records: ' + error.message);
    }
});

// get a single record by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Record with ID: ${id}`);
});
// create a new record
router.post('/', async (req, res) => {
    const newRecord = req.body;
    try {
        const record = await schema.create(newRecord);
        res.status(201).json(record);
    } catch (error) {
        res.status(400).send('Error creating record: ' + error.message);
    }
});
// update a record by id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedRecord = req.body;
    res.send(`Record with ID: ${id} updated to: ${JSON.stringify(updatedRecord)}`);
});
// delete a record by id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Record with ID: ${id} deleted`);
});

module.exports = router;