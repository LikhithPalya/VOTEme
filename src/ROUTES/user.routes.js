import express from "express";
import {
    signup,
    login,
    getProfile,
    changePassword,
    logout
} from "../CONTROLLERS/user.controller.js"; 
import { jwtAuthMiddleware } from "../MIDDLEWARE/jwtAuth.midddleware.js";

const router = express.Router();

// User signup route
router.post('/signup', signup);

// User login route
router.post('/login', login);
router.post('/logout', logout);
// Get user profile route (protected)
router.get('/profile', jwtAuthMiddleware, getProfile);

// Change password route (protected)
router.put('/profile/password', jwtAuthMiddleware, changePassword);

export default router;
