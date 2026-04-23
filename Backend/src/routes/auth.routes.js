import { Router } from "express";
import passport from "passport";
import {
  validateLoginUser,
  validateRegisterUser,
} from "../validator/auth.validator.js";
import {
  googleCallBack,
  login,
  register,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", validateRegisterUser, register);
router.post("/login", validateLoginUser, login);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallBack,
);

export default router;
