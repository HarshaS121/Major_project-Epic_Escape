const User=require("../models/user")

module.exports.signupRenderForm=(req,res)=>{
    res.render("users/signup.ejs")
}

module.exports.signup=async(req,res)=>{
    try{
    let {username,email,password}=req.body;
    const newUser=new User({username,email});
    const registerdUser=await User.register(newUser,password)
    req.login(registerdUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to Epic-Escapes");
        res.redirect("/listings")
    }) }
   catch(e){
    req.flash("error", e.message);
    res.redirect("/signup");
   }
};

module.exports.loginRenderForm=(req,res)=>{
    res.render("users/login.ejs")
};

//ye login k baad ka code hai, actual login toh(passport)krwa raha hai
//better simplicity k liye we use login here...
module.exports.login=async(req,res)=>{
  req.flash("success","Logged in successfully");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout=(req,res,next)=>{
   req.logout((err)=>{
    if(err){
        return next(err)
    }
    req.flash("success","Logged out successfully");
    res.redirect("/listings");
   })
};
