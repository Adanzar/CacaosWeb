const { Router } = require('express');
const userController = require('../controllers/userController');

const userRoutes = Router();

userRoutes.get(
  '/profile',
  userController.getProfile
);

module.exports = userRoutes;
