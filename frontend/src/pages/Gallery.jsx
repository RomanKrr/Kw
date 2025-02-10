import "../pageStyles/Gallery.css";
import { motion } from "framer-motion";

import img1 from "../assets/photos/3w.jpg";
import img2 from "../assets/photos/s14.jpg";
import img3 from "../assets/photos/s15.jpg";
import img4 from "../assets/photos/ae86.jpg";
import img5 from "../assets/photos/3wb.jpg";
import img6 from "../assets/photos/maselati_EU-819x1024.jpg";
import { useGalleryStore } from "../store/useGalleryStore";
import { useEffect } from "react";

const images = [img2, img3, img4, img5, img2, img3, img4, img5, img6, img2, img3, img4, img5, img2, , img1,img3, img4, img5, img6, img3, img4, img5, img1,];

const Gallery = () => {
    const { image , getImages} = useGalleryStore();
    
    useEffect(()=>{
        getImages()
    }, [getImages])
    return (
        <section className="gallery">
            {image.length > 0 ? (
                <div className="gallery_container">
                    {image.map((img, index) => (
                        <motion.div
                            key={index}
                            className="gallery_item"
                            initial={{ opacity: 0, x: img.direction * 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.35 }}
                        >
                            <img src={img} alt={`Gallery Image ${index + 1}`} />
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p className="loading_text">Loading images...</p>
            )} 
        </section>
    );
};

export default Gallery;
