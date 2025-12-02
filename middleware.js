const Listing = require("./models/listing.js");
const Review=require("./models/review")
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js"); // ✅ single import is enough


// Middleware to check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to create a listing!");
    return res.redirect("/login");
  }
  next();
};

//  Middleware to save redirect URL
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

//  Middleware to check if current user is the owner of the listing
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);

  // Make sure both listing and user exist before comparing
  if (!listing || !res.locals.currUser || !listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this listing!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

//  Middleware to validate listing data using Joi
module.exports.validateListing = (req, res, next) => {
  console.log("BODY RECEIVED IN VALIDATION:", req.body);
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
};

// Middleware to validate review data using Joi
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
};

module.exports.isReviewAuthor= async (req, res, next) => {
  let {id,reviewId } = req.params;
  let review=await Review.findById(reviewId);
  // Make sure both listing and user exist before comparing
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};