const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try { 
    // Get token from request header 
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Expect "Bearer <token>" 
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Invalid token format' });
    } 

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to the request object
    req.user = decoded; 

    // Continue to the route
    next();
  } catch (err) { 
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

module.exports = auth;
