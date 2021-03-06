const { Router } = require("express");
const passport = require("passport");
const { validate } = require("../helpers/validate");
const { signUp, signIn } = require("./auth.controller");
const { signUpSchema, signInSchema } = require("./auth.schemes");

const router = Router();

router.post("/sign-up", validate(signUpSchema), signUp);
router.post("/sign-in", validate(signInSchema), signIn);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/success",
    failureRedirect: "http://localhost:3000/error",
  })
);

exports.authRouter = router;
