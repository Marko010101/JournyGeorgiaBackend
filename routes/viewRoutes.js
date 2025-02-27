const express = require("express");
const viewController = require("../controllers/viewController.js");
const authController = require("../controllers/authController.js");
const bookingController = require("../controllers/bookingController.js");

const router = express.Router();

router.use(viewController.alerts);

//routes for templates and pages
router.get(
  "/",
  // bookingController.webhookCheckout,
  authController.isLoggedIn,
  viewController.getOverview,
);
router.get("/tour/:slug", authController.isLoggedIn, viewController.getTour);
router.get("/login", authController.isLoggedIn, viewController.getLoginForm);
router.get("/me", authController.protect, viewController.getAccount);
router.get("/my-tours", authController.protect, viewController.getMyTours);

module.exports = router;
