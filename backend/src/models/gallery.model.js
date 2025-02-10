import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
    {
        title: String,
        urls: [String],
    },
    { timestamps: true }
);

const Image = mongoose.model("Image", ImageSchema);

export default Image;
