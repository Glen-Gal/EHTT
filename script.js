require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const images = [
    'assets/img/Gallery/12F4D873-4A0D-4D3F-8434-E932316C009E.jpg',
    'assets/img/Gallery/626245B2-B539-4ABC-BAED-6515F881B5CC.jpg',
    'assets/img/Gallery/D8C72F88-26E9-4F55-B1A2-D721AD283AAD.jpg',
    'assets/img/Gallery/D15C5060-FE56-484E-B5AC-2122264F1E42.jpg',
    'assets/img/Gallery/D736CD11-60AC-4304-9522-412E0C86C263.jpg',
    'assets/img/Gallery/E13780CE-C192-4DB8-A3F3-04492D9C6E12.jpg',
    'assets/img/Gallery/HHWU9669.JPG',
    'assets/img/Gallery/IMG_0504.JPG',
    'assets/img/Gallery/IMG_0507.JPG',
    'assets/img/Gallery/IMG_0837.JPG',
    'assets/img/Gallery/IMG_0844.JPG',
    'assets/img/Gallery/IMG_0845.JPG',
    'assets/img/Gallery/IMG_0846.JPG',
    'assets/img/Gallery/IMG_0848.JPG',
    'assets/img/Gallery/IMG_1131.jpg',
    'assets/img/Gallery/IMG_1439.jpg',
    'assets/img/Gallery/IMG_2154.jpg',
    'assets/img/Gallery/IMG_2508.jpg',
    'assets/img/Gallery/IMG_2778.PNG',
    'assets/img/Gallery/IMG_3501.jpg',
    'assets/img/Gallery/IMG_3502.jpg',
    'assets/img/Gallery/IMG_3525.jpg',
    'assets/img/Gallery/IMG_3670.jpg',
    'assets/img/Gallery/IMG_3719.jpg',
    'assets/img/Gallery/IMG_3739.jpg',
    'assets/img/Gallery/IMG_3744.jpg',
    'assets/img/Gallery/IMG_3850.jpg',
    'assets/img/Gallery/IMG_3879.jpg',
    'assets/img/Gallery/IMG_3890.jpg',
    'assets/img/Gallery/IMG_3897.jpg',
    'assets/img/Gallery/IMG_3900.jpg',
    'assets/img/Gallery/IMG_3903.jpg',
    'assets/img/Gallery/IMG_3906.jpg',
    'assets/img/Gallery/IMG_3910.jpg', 
    'assets/img/Gallery/IMG_3912.jpg', 
    'assets/img/Gallery/IMG_3913.jpg', 
    'assets/img/Gallery/IMG_3921.jpg', 
    'assets/img/Gallery/IMG_3922.jpg', 
    'assets/img/Gallery/IMG_3935.jpg', 
    'assets/img/Gallery/IMG_3941.jpg', 
    'assets/img/Gallery/IMG_3938.jpg', 
    'assets/img/Gallery/IMG_3966.jpg', 
    'assets/img/Gallery/IMG_4472.jpg', 
    'assets/img/Gallery/IMG_4987.JPG', 
    'assets/img/Gallery/IMG_5633.jpg', 
    'assets/img/Gallery/IMG_5998.jpg', 
    'assets/img/Gallery/IMG_6077.jpg', 
    'assets/img/Gallery/IMG_6110.PNG', 
    'assets/img/Gallery/IMG_6402.jpg', 
    'assets/img/Gallery/IMG_6754.JPG', 
    'assets/img/Gallery/IMG_7286.jpg', 
    'assets/img/Gallery/IMG_7978.jpg', 
    'assets/img/Gallery/IMG_7982.jpg', 
    'assets/img/Gallery/IMG_8013.JPG',
    'assets/img/Gallery/IMG_8098.jpg', 
    'assets/img/Gallery/IMG_8136.jpg ',
    'assets/img/Gallery/IMG_8141.jpg' ,
    'assets/img/Gallery/IMG_8165.jpg ',
    'assets/img/Gallery/IMG_8138.jpg ',
    'assets/img/Gallery/IMG_8134.jpg ',
    'assets/img/Gallery/IMG_8271.jpg ',
    'assets/img/Gallery/IMG_8381.jpg ',
    'assets/img/Gallery/IMG_8272.jpg ',
    'assets/img/Gallery/IMG_8968.jpg ',
    'assets/img/Gallery/IMG_9095.jpg ',
    'assets/img/Gallery/IMG_9097.jpg ',
    'assets/img/Gallery/IMG_9140.jpg ',
    'assets/img/Gallery/IMG_9278.JPG ',
    'assets/img/Gallery/IMG_9712.jpg ',
    'assets/img/Gallery/IMG_9633.jpg ',
    'assets/img/Gallery/IMG_9713.jpg ',
    'assets/img/Gallery/IMG_9739.jpg ',
    'assets/img/Gallery/IMG_20210214_210549_297.jpg ',
    'assets/img/Gallery/IMG_20210217_173918.JPG ',
    'assets/img/Gallery/IMG_20210217_173947.JPG ',
    'assets/img/Gallery/IMG_20210217_174018.JPG ',
    'assets/img/Gallery/IMG_E2149.jpg ',
    'assets/img/Gallery/photo-1616789533930-7af5876838a1.avif',
    'assets/img/Gallery/VYTY1596.JPG',
]
async function uploadImages() {
    for (const image of images){
        try {
            const result = await cloudinary.uploader.upload(image);
            console.log(`Image uploaded: ${result.secure_url}`);
        } catch (error) {
            console.error(`Error uploading image ${image}: ${error.message}`);
        }
    }
}

uploadImages();
