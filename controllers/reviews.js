const Listing=require("../models/listing");
const Review=require("../models/review")

module.exports.postReview=async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        throw new expressError(404, "Listing not found")}
    let newReview = new Review(req.body.review);
    newReview.author=req.user._id;
    if (!listing.review) {
        listing.review = []}
    listing.review.push(newReview);
    await newReview.save();
    await listing.save();
      req.flash("success","New Review created!")
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview=async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    await Review.findByIdAndDelete(reviewId);
  req.flash("success","Review  deleted!")
    res.redirect(`/listings/${id}`);
};