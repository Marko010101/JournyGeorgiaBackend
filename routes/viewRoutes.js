const express = require("express");
const viewController = require("../controllers/viewController.js");

const router = express.Router();
//routes for templates and pages
router.get("/", viewController.getOverview);
router.get("/tour/:slug", viewController.getTour);
router.get("/login", viewController.getLoginForm);

module.exports = router;
