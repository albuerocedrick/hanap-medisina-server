const express = require("express");
const router = express.Router();

// 1. Import the security guard
const verifyFirebaseToken = require("../middleware/auth.middleware");

// 2. Import the controller we just made
const { createUserProfile } = require("../controllers/user.controller");

// POST
router.post("/profile", verifyFirebaseToken, createUserProfile);

module.exports = router;
