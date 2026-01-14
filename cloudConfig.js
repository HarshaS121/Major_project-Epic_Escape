const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})
console.log("Cloud Name is:", process.env.CLOUD_NAME); // If this prints 'undefined', the issue is #1 or #3

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'epic_escape_DEV',
    allowedformats: ['png','jpg','jpeg']
  },
});

module.exports={
    cloudinary,
    storage
}