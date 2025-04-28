const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) return res.status(401).json({ message: 'Not authenticated' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.userId = decodedToken.id;
    next();
  });
};
