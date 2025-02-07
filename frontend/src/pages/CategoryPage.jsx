import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import c_img1 from "../assets/photos/clothes-hoodie.jpg";
import c_img2 from "../assets/photos/c_stickers.jpg";
import c_img3 from "../assets/photos/s15.jpg";
import c_img4 from "../assets/photos/c_shockAbsorber.jpg";
import "../pageStyles/CategoriesStyle.css";

const categories = [
  { href: "/body-kits", name: "Body Kits", imageUrl: c_img3, jpName: "ボディキット" },
  { href: "/auto-parts", name: "Auto Parts", imageUrl: c_img4, jpName: "自動車部品" },
  { href: "/accessories", name: "Accessories, Stickers", imageUrl: c_img2, jpName: "アクセサリー、ステッカー" },
  { href: "/clothes", name: "Clothes", imageUrl: c_img1, jpName: "服" },
];

const CategoryItem = ({ category }) => {
  return (
    <Link to={"/category" + category.href}>
      <motion.div
        className="categories_card"
        initial={{ opacity: 0, y: 0 }} // Початкові значення для анімації
        animate={{ opacity: 1, y: 0 }}  // Анімація при появі
        transition={{ duration: 0.8, ease: "easeOut" }} // Тривалість анімації
      >
        <img src={category.imageUrl} alt={category.name} />
        <h2 className="categories_card-title">
          {category.name}
          <br />
          {category.jpName}
        </h2>
      </motion.div>
    </Link>
  );
};

const CategoryPage = () => {
  return (
    <div className="categories">
      <div className="categories_container">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
