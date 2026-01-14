const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const expressError=require("../utils/expressError.js")
const { listingSchema} = require("../schema.js");
const Listing=require("../models/listing.js");
const {isLoggedIn, isOwner}=require("../middleware.js");
const listingController=require("../controllers/listings.js")

const multer  = require('multer')
const {storage}=require("../cloudConfig.js");
const upload = multer({storage})

const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
    throw new expressError(404,errMsg)
    }else{
        next();
    }
};

//INDEX ROUTE and REDIRECT TO THE INDEX PAGE
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.redirectIndex));


//CREATE NEW LISTINGS
router.get("/new",isLoggedIn,listingController.renderNewForm);

//SHOW SINGLE LISTING, UPDATE and DELETE
router.route("/:id")
.get(wrapAsync(listingController.showSingleListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListing));

module.exports=router;