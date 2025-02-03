const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review can not be empty!"],
      trim: true,
      maxlength: [50, "Review should not be longer than 50 characters"],
      minlength: [3, "Review should be longer than 3 characters"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "A review must have a rating"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // select: false,
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: "Tour",
      requred: [true, "Review must belong to a tour"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      requred: [true, "Review must belong to a user"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
