const express = require('express');
const tourRoutes = express.Router();
const tourController = require('./../Controllers/tourController');
const authController = require('./../Controllers/authController');

//ROUTES
// Top 5 cheapest
tourRoutes
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getTours);

tourRoutes.route('/tour-stats').get(tourController.getTourStats);
tourRoutes.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

tourRoutes
  .route('/')
  .get(authController.protect, tourController.getTours)
  .post(tourController.createTour);
tourRoutes
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour
  );

module.exports = tourRoutes;
