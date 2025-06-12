const express = require('express');
const router = express.Router();

// get all records
router.get('/', (req, res) => {
    res.send('All records');
});
// get a single record by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Record with ID: ${id}`);
});
// create a new record
router.post('/', (req, res) => {
    const newRecord = req.body;
    res.status(201).send(`New record created: ${JSON.stringify(newRecord)}`);
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