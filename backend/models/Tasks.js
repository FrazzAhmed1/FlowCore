const mongoose = require('mongoose'); 

const TaskSchema = new mongoose.Schema({

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
    maxlength: 150,
  },
  urgency: {
    type: String,
    enum: ["low", "medium", "high"],
    required: true,
    default: "medium",
  },
  dueDate: { 
    type: Date,
    required: false, 
  }, 
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);