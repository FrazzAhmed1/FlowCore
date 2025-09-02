const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes'); 
const loginRoutes= require('./routes/authRoutes'); 
const journalRoutes = require('./routes/journalRoutes'); 
 
const app = express(); 
const PORT = process.env.PORT || 5000; 

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI) 
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.log('MongoDB connection error:', err)); 

// Routes
app.use('/api', authRoutes); 
app.use('/api', loginRoutes); 
app.use('/api', journalRoutes); 

// Test route 
app.get('/', (req, res) => { 
  res.json({ message: 'FlowCore Backend is running!' });
}); 

// Start server
app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`);
}); 