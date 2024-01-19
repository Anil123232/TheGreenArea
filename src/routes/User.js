import express from "express";
import {
  LoginUser,
  createUser,
  verifyEmail,
  verifyUser,
} from "../domains/User/index.js";
const router = express.Router();
// create user
router.route("/signup").post(createUser);
//verify user
router.route("/thegreenarea/verify-email/:token").get(verifyEmail);
// login user
router.route("/login").post(LoginUser);

// verfiy user
router.route("/thegreenarea/verify").get(verifyUser);

export default router;
