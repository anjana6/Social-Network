const cloudinary = require('cloudinary').v2;
const config = require('config');

cloudinary.config({
    cloud_name: 'ashakthi',
    api_key: '566978478781933',
    api_secret: '-YcmpnfonlpwqOlxeMtFZfnGF1A'
});

const uploadImage =async (file) =>{
    // console.log(file);
    try {
       return await cloudinary.uploader.upload(file.tempFilePath)
            
    // console.log("Result:",result)
    } catch (error) {
        console.log(error)
    }
    
}


module.exports = uploadImage;