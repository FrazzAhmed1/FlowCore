const bcrypt = require('bcryptjs'); 
const User = require('../models/User'); 
const jwt = require('jsonwebtoken'); 

 
const login = async (req, res) => { 

  try { 
    // parse get passed values for username and password 
    const {username,password} = req.body; 
 
    if (!username || !password) { 
        return res.status(400).json({error: 'must enter both fields'});
    } 
 
     if (username.length<3) { 
        return res.status(400).json({error: 'User name must be at least 3 characters long'});
     } 
     
// username match checking 
    const existsUser = await User.findOne({ 
          $or: [{ username: username }] 
        }); 
// password match checking if username match successful 
    if (existsUser) { 
         const response= await bcrypt.compare(password,existsUser.password); 
         if (response) {
          const token = jwt.sign(
            { id: existsUser._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
          ); 
        
          return res.status(200).json({
            message: 'login successful',
            token
          });
        }

         else { 
            return res.status(400).json({error:'Wrong Password'}); 
         } 
    } 
    else {
        return res.status(400).json({error:'invalid credentials'}); 
    } 
} 
    catch (error) {  
        return res.status(500).json({error:'network error reported'}); 
  } 
}
 
// We'll add more controller functions here later 
module.exports = { 
  login 
}; 