const express = require('express'); 
const { journal } = require('../controllers/journalController'); 

const router = express.Router();

// POST /api/journal 
router.post('/journal', journal);
 
module.exports = router; 