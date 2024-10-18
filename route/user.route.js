import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";

import { login, signup } from "../controller/user.controller.js";
const router = express.Router()
router.post("/signup",signup);
router.post("/login",login);

router.get("/protected-route", authMiddleware, (req, res) => {
    res.status(200).json({ message: "You have accessed a protected route!" });

});
export default router;