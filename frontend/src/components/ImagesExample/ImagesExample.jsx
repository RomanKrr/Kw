import { motion } from "framer-motion";
import img1 from "../../assets/photos/corvette.jpg";
import img2 from "../../assets/photos/ae86.jpg";
import img3 from "../../assets/photos/s15.jpg";
import img4 from "../../assets/photos/s14.jpg";
import img5 from "../../assets/photos/22.jpeg";

import "../ImagesExample/ImagesExample.css";

const ImagesExample = () => {
    const images = [
        { src: img1, direction: -1 },
        { src: img2, direction: 1 },
        { src: img3, direction: -1 },
        { src: img4, direction: 1 },
        { src: img5, direction: -1 },
    ];

    return (
        <section>
            <div className="images_example_container">
                <div className="images_header">
                    <p>"Cars - that's all what do we have"</p>
                    <p>私たちが持っているのは車だけです</p>
                </div>
                <div className="images_container">
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image.src}
                            alt=""
                            className="ii"
                            initial={{ opacity: 0, x: image.direction * 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.35 }}
                        />
                    ))}
                    <p className="vertical">伝説を牽引する</p>
                    <p className="horizontal">雰囲気を生きる</p>
                </div>
                <div className="images_footer">
                    <p>Drive the legend. Live the vibe.</p>
                </div>
            </div>
        </section>
    );
};

export default ImagesExample;
