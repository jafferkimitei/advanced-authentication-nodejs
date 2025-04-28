const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/signup', [
  body('email').isEmail().withMessage('Enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
], authController.signup);


router.post('/login', authController.login);


router.get('/logout', authController.logout);


router.get('/protected', protect, (req, res) => {
  res.status(200).json({ message: 'You are authorized', userId: req.userId });
});

module.exports = router;
