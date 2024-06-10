const express = require('express');
const { addFlat, showFlats, modifyFlatData, deleteFlatById } = require('../controllers/flatController');

const router = express.Router();


router.post('/add', (req, res) => {
    addFlat(req, res);
});

router.get('/get-all', (req, res) => {
    showFlats(req, res);
});

router.patch('/update/:id', (req, res) => {
    modifyFlatData(req, res);
})

router.delete('/delete/:id', (req, res) => {
    deleteFlatById(req, res);
});

module.exports = router;
