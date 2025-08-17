const express = require('express');
const userRoutes = express.Router();
const userController = require('../Controllers/userController');
const authController = require('./../Controllers/authController');
//ROUTES

userRoutes.post('/signup', authController.signUp);
userRoutes.post('/login', authController.login);
userRoutes.post('/forgotpassword', authController.forgotPassword);
userRoutes.patch('/resetpassword/:token', authController.resetPassword);

userRoutes.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

userRoutes.patch('/updateMe', authController.protect, userController.updateMe);
userRoutes.delete('/deleteMe', authController.protect, userController.deleteMe);

userRoutes
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
userRoutes
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRoutes;
