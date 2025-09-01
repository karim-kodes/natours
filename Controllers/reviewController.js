const Review = require('./../Models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const handlerFactory = require('./handlerFactory');

// Getting all reviews

exports.getReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };
  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// Creating a review

exports.createReview = handlerFactory.createOne(Review);
exports.deleteReview = handlerFactory.deleteOne(Review);
exports.updateReview = handlerFactory.updateOne(Review);
