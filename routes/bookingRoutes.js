const express = require("express");
const bookingController = require("../controllers/bookingController.js");
const authController = require("../controllers/authController.js");

const router = express.Router();

router.use(authController.protect);

router.get("/checkout-session/:tourId", bookingController.getCheckoutSession);

router
  .route("/")
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(authController.restrictTo("admin"), bookingController.updateBooking)
  .delete(authController.restrictTo("admin"), bookingController.deleteBooking);

module.exports = router;
