const mongoose=require("mongoose");
const listData= require("./data.js");
const Listing=require("../models/listing.js");

const mongo_url="mongodb://127.0.0.1:27017/epic_escape";

main().then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log("found error");
})
async function main(){
    await mongoose.connect(mongo_url)
}
 const initDB=async()=>{
    await Listing.deleteMany({});
    listData.data=listData.data.map((obj)=>({...obj,owner:'692b007a14ce776c6102771e'}))
    await Listing.insertMany(listData.data)
    console.log("data inserted");
 };

 initDB();
 