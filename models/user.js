const { required } = require("joi");
const mongoose=require("mongoose");
const Schema =mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({  //it by default add username and password schema to the userSchema due to passport-local-mongoose
    email:{
        type:String,
        required:true,
    },
});

userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",userSchema);