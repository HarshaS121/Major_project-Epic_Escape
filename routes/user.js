const express=require("express");
const router=express.Router();
const User = require("../models/user.js");
const wrapAsync=require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController=require("../controllers/users.js");

//SIGNUP RENDERFORM and SIGNUP
router.route("/signup")
.get((userController.signupRenderForm))
.post(wrapAsync(userController.signup));

//LOGIN RENDERFORM and LOGIN
router.route("/login")
.get((userController.loginRenderForm))
.post(saveRedirectUrl,passport.authenticate("local",
    { failureRedirect:"/login",
    failureFlash:true
    }
),userController.login)

//LOGOUT
router.get("/logout",userController.logout)

module.exports=router;