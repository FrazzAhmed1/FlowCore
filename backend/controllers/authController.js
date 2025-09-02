const bcrypt = require('bcryptjs');
const User = require('../models/User');
 
const register = async (req, res) => { 
  try { 
    const { name, email, username, password } = req.body;

    // Validation 
    if (!name || !email || !username || !password) {
      return res.status(400).json({ error: 'All fields required' }); 
    } 

    const emailRegex = /^\S+@\S+\.\S+$/; 
    if (!emailRegex.test(email)) { 
      return res.status(400).json({ error: 'Invalid email format' }); 
    } 

    if (username.length < 3) { 
      return res.status(400).json({ error: 'Username must be at least 3 characters' });
    }

    if (password.length < 4) { 
      return res.status(400).json({ error: 'Password must be at least 4 characters' });
    }

    // Check for existing user 
    const existingUser = await User.findOne({ 
      $or: [{ email: email }, { username: username }]
    }); 
 
    if (existingUser) { 
      return res.status(400).json({ error: 'User already exists' });
    } 

    // Hash password and create user
    const hashPassword = await bcrypt.hash(password, 10); 
    const newUser = new User({
      firstname: name, 
      email: email, 
      username: username,
      password: hashPassword 
    }); 
 
    await newUser.save(); 

    res.status(201).json({ 
      success: true,
      message: 'User created successfully!', 
      userId: newUser._id
    });
 
  } catch (error) { 
    res.status(400).json({ error: error.message }); 
  }
}; 
 
// We'll add more controller functions here later 
module.exports = {
  register
}; 