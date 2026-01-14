const Joi = require('joi');

module.exports.listingSchema=Joi.object({
    listing:Joi.object({
        title: Joi.string().required(), // Title string hona chahiye aur zaroori (required) hai
        description: Joi.string().required(), // Description bhi zaroori hai
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required(),
        image:Joi.string().allow("",null),
        category: Joi.string().valid("Trending", "Rooms", "Iconic Cities", "Mountains", "Castles", "Amazing Pools", "Camping", "Farms", "Arctic").required()
        // Image string ho sakti hai, ya khaali ("") ya null bhi chalega
    }).required()  // Poora 'listing' object zaroori hai
});

module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }).required()
})