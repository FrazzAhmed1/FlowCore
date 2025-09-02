const mongoose = require('mongoose'); 
 
const JournalSchema = new mongoose.Schema({ 

  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  title: {
    type: String, 
    required: true, 
    trim: true, 
    maxlength: 100, 
  },
  description: {
    type: String, 
    required: true,
    trim: true,
    maxlength: 500, 
  }, 
  Date: {
    type: Date, 
    required: true,
  }, 
}, { timestamps: true }); 

module.exports = mongoose.model('Journal', JournalSchema);