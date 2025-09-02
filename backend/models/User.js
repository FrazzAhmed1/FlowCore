const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema({ 
  firstname: {
    type: String,
    required: true,
    trim: true, 
    maxlength: 50, 
  }, 
  username: { 
    type: String, 
    required: true,
    unique: true, 
    trim: true,
    minlength: 3, 
    maxlength: 30, 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  }, 
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema); 
