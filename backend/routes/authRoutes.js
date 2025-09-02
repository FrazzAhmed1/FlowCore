const express = require('express'); 
const { register } = require('../controllers/authController'); 
const { login }= require('../controllers/loginController');

const router = express.Router();

// POST /api/register 
router.post('/register', register); 
 
// POST /api/login
router.post('/login', login); 
 
module.exports = router; 