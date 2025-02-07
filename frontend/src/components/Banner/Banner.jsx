import { motion } from "framer-motion";
import banner_image from "../../assets/photos/banner.png";
import banner_logo from "../../assets/logos/dragon-logo.png";
import "../Banner/Banner.css";

const Banner = () => {
    return (
        <section>
            <div className="banner">
                <img className="banner-img" src={banner_image} alt="" />

                {/* Плавна поява для тексту "left" */}
                <motion.p
                    className="st left"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Power of style
                </motion.p>

                <div className="txt">
                    カイゼンワークス
                </div>

                {/* Плавна поява для тексту "right" */}
                <motion.p
                    className="st right"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    "The best style decision that you can imagine."
                </motion.p>
            </div>

            <div className="banner_text">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}>

                    We are your gateway to the world of Japanese car culture.
                    Bringing your car to life with custom tuning that's all about style, precision, and personality.
                </motion.p>

                {/* Анімація для логотипа */}
                <motion.img
                    src={banner_logo}
                    alt="dragon"
                    className="bg-dragon"
                    initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                    animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
                    transition={{ duration: 2, ease: "easeOut", type: "spring", stiffness: 80 }}
                />
            </div>
        </section>
    );
};

export default Banner;
