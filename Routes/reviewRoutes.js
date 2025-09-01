const express = require('express');
const reviewController = require('./../Controllers/reviewController');
const authController = require('./../Controllers/authController');
const router = express.Router({ mergeParams: true });

// POST /tour/tourId/reviews
router
  .route('/')
  .get(reviewController.getReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .delete(reviewController.deleteReview)
  .patch(reviewController.updateReview);

module.exports = router;
