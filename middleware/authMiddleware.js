const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'ducky', (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decodedToken;
    next();
  });
};

module.exports = authMiddleware;
