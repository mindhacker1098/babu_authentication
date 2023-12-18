const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');


router.get('/protected', authMiddleware, (req, res) => {
  const { role } = req.user;

  if (role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  res.json({ message: 'Protected Route Accessed' });
});

module.exports = router;
