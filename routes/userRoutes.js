const express = require("express");
const userController = require("../controllers/userController.js");
const authController = require("../controllers/authController.js");
const reviewController = require("../controllers/reviewController.js");

const router = express.Router();

router.get(
  "/me",
  authController.protect,
  userController.getMe,
  userController.getUser,
);

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Protect all routes below this middleware
router.use(authController.protect);
router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe,
);
router.delete("/deleteMe", userController.deleteMe);
router.patch("/updateMyPassword", authController.updatePassword);

router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
