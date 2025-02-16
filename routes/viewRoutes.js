const express = require("express");
const viewController = require("../controllers/viewController.js");
const authController = require("../controllers/authController.js");

const router = express.Router();

//routes for templates and pages
router.get("/", authController.isLoggedIn, viewController.getOverview);
router.get("/tour/:slug", authController.isLoggedIn, viewController.getTour);
router.get("/login", authController.isLoggedIn, viewController.getLoginForm);
router.get("/me", authController.protect, viewController.getAccount);

module.exports = router;
