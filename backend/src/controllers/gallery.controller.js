import cloudinary from "../lib/cloudinary.js";
import Image from "../models/gallery.model.js";

export const createImage = async (req, res) => {
    const { images } = req.body;
    try {
        const uploadedImages = await Promise.all(
            images.map(async (image) => {
                const uploadResponse = await cloudinary.uploader.upload(image);
                return uploadResponse.secure_url;
            })
        );


        const newImage = new Image({
            urls: uploadedImages
        })

        if (newImage) {
            await newImage.save();

            res.status(200).json({
                images: newImage.urls
            })
        } else {
            res.status(400).json({ message: "Invalid data" });
        }
    } catch (error) {
        console.log("Error in createGallery controller", error.message);
        res.status(500).json({ message: "Server error" });
    }
}


export const getGalleryImages = async (req, res) => {
    try {
        const images = await Image.find({}, "urls");
        const allUrls = images.flatMap((img) => img.urls);

        res.json({ urls: allUrls });
    } catch (error) {
        console.error("Error fetching gallery images:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};