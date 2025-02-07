import { motion } from "framer-motion";
import main_logo from "../../assets/logos/main-logo (2).png";
import "../About/About.css";

const About = () => {
    return (
        <section>
            <div className="about" id="about-section">
                {/* Логотип */}
                <motion.img
                    src={main_logo}
                    alt=""
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false}}
                />
                
                <motion.div
                    className="about_text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false}}
                >
                    All technical works, tuning, installation/creation of your own body kits, new rims and tires.
                    Our own shop - stickers, body kits, clothes, auto parts.<br />
                    That's all and everything else you can find here 👇
                </motion.div>

                <motion.div
                    className="about_location"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false}}
                >
                    <p>Location<br />位置</p>
                    <motion.div
                        className="location"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: false}}
                    >
                        Tokyo, Shibuya City, Sakura St. 11-23
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
