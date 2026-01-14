const Listing=require("../models/listing");

module.exports.index = async (req, res) => {
  const { q, category } = req.query; 
  let allListings;

  if (category) {
    // Category filter logic waisa hi rahega
    allListings = await Listing.find({ category: category });
  } 
  else if (q) {
    // NEW SEARCH LOGIC 👇
    allListings = await Listing.find({ 
      $or: [
        { title: { $regex: q, $options: "i" } },   // Title me dhoondo
        { location: { $regex: q, $options: "i" } }, // Location me dhoondo
        { country: { $regex: q, $options: "i" } }   // Country me dhoondo
      ]
    });
  } 
  else {
    // Default logic
    allListings = await Listing.find({});
  }

  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm=(req,res)=>{
   res.render("listings/new.ejs")
};

module.exports.redirectIndex = async (req, res) => {
    // 1. Get the form data
    let listing = req.body.listing;
    
    // 2. Create the new listing instance
    const newListing = new Listing(listing);

    // 3. Handle the image file (The Fix is Here)
    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename; // Get filename directly from req.file
        newListing.image = { url, filename };
    }
    // 4. Assign the owner and save
    newListing.owner = req.user._id;
    await newListing.save();

    req.flash("success", "New listing created!");
    res.redirect("/listings");
};

module.exports.editListing=async(req,res)=>{
let {id}=req.params;
let listing=await Listing.findById(id);
if(!listing){
        req.flash("error","Listing you requested does not exist")
        res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/h_300,w_250")
res.render("listings/edit.ejs",{listing,originalImageUrl})
};

module.exports.showSingleListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({path:"review",
     populate:
     {path:"author"},
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested does not exist")
        res.redirect("/listings");
    }
    console.log(listing)
    res.render("listings/show.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    
    // Step 1: Pehle Listing dhoondo aur Text Data (Price, Title etc) update kar do.
    // Note: Hum yaha 'listing' variable mein result store kar rahe hain taaki agar image ho to usse use kar sakein.
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Step 2: Check karo - Kya user ne nayi file (image) upload ki hai?
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        
        // Step 3: Agar nayi image aayi hai, sirf tabhi purani image replace karo
        listing.image = { url, filename };
        await listing.save(); // Image ko database mein save karoo
    }
    
    // Agar req.file undefined hai (image select nahi ki), to Step 2 aur 3 skip ho jayenge
    // Aur purani image waisi ki waisi rahegi.

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing=async (req,res)=>{
     let { id } = req.params;
     const deleteList= await Listing.findByIdAndDelete(id);
     req.flash("success","Listing deleted!")
     res.redirect("/listings");
};