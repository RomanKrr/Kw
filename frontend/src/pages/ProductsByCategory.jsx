import { Link, useParams } from "react-router-dom";
import "../pageStyles/Clothes.css";
import { useEffect, useState } from "react";
import { useProductStore } from "../store/useProductStore";
import Basket from "../components/Basket/Basket";
import ShopHeader from "../components/ShopHeader/ShopHeader";


import { motion } from "framer-motion";


const ProductsByCategory = () => {
  const { allProducts, getAllProductsByCategory, loading } = useProductStore();
  const { category } = useParams();

  const [openBskt, setOpenBskt] = useState(false)
  const [selectedSort, setSelectedSort] = useState("");

  const sortChange = (event) => {
    setSelectedSort(event.target.value);
    console.log("som", event.target.value);
  }

  const sortProducts = () => {
    if (selectedSort === "") return allProducts;

    let sortedProducts = [...allProducts];
    if (selectedSort == "low-hight") {
      sortedProducts.sort((a, b) => a.price - b.price)
    } else if (selectedSort == "hight-low") {
      sortedProducts.sort((a, b) => b.price - a.price)
    }
    return sortedProducts;
  };


  const openHandler = () => {
    setOpenBskt(!openBskt)
  }


  useEffect(() => {
    if (category) {
      console.log("Fetching products for category:", category);
      getAllProductsByCategory(category);
    }
  }, [category, getAllProductsByCategory]);


  // console.log("products:", allProducts);

  const closeBasketHandler = () => {
    setOpenBskt(false);
  };

  const categorySymbols = {
    "clothes": "服",
    "auto-parts": "自動車部品",
    "accessories": "アクセサリー",
    "body-kits": "ボディキット"
  };

  return (
    <section>
      {loading ? (
        <div className="alert_wrapper">
          <p className='load'>Завантаження...</p>
        </div>
      ) : (
        <>
          <ShopHeader cat={categorySymbols[category]} />
          <div className="clothes_container">
            {/* <div className="clothes_header">
          <div className="bst_btn" onClick={openHandler} >
            <CiShoppingBasket className="basket_logo" />
          </div>
          {openBskt && (
            <Basket openBskt={openBskt} closeBasket={closeBasketHandler} />
          )}
          <div className="categories_name">
            <p>{category.toUpperCase()}<br />{categorySymbols[category] || ""}
            </p>
          </div>
        </div> */}
            <div className="sort_side">
              <Link to="/categoryPage">
                <p>CATEGORY</p>
              </Link>              
              <div className="sort_by">
                <select value={selectedSort} onChange={sortChange}>
                  <option value="">Sort By</option>
                  <option value="low-hight">Price: Low to High</option>
                  <option value="hight-low">Price: High to Low</option>
                  {/* <option value="">Sort By</option>
              <option value="clothes">clothes</option>
              <option value="auto-parts">auto-parts</option>
              <option value="body-kits">body-kits</option>
              <option value="accessories">accessories</option> */}
                </select>
              </div>
            </div>

            <div className="card_container">
              {sortProducts().length > 0 ? (
                sortProducts().map((product, index) => {
                  const isSoldOut = product?.countInStorage === 0;
                  return (
                    <Link
                      to={`/productPage/${product._id}`}
                      className={`card ${isSoldOut ? "sold_out" : ""}`}
                      key={index}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <div className="card_image_cont">
                          <img
                            src={product.images[0]}
                            alt={product.productName}
                            className="card_image"
                          />
                          {isSoldOut ? (
                            <p className="low_in_storage">Sold Out</p>
                          ) : product?.countInStorage < 5 ? (
                            <p className="low_in_storage">Almost Gone</p>
                          ) : null}
                        </div>
                        <div className="card_info">
                          <h1 className="card_name">{product.productName}</h1>
                          <div className="card_info_container">
                            {category === "clothes" ? (
                              <p className="card_color">
                                Color
                                <span className="color_dot black"></span>
                                <span className="color_dot purple"></span>
                                <span className="color_dot white"></span>
                              </p>
                            ) : null}
                            <p className="card_price">${product.price}</p>
                          </div>
                        </div>
                        <div className="card_button">GO TO SHOP</div>
                      </motion.div>
                    </Link>
                  );
                })
              ) : (
                <p>No products found for this category.</p>
              )}
            </div>
          </div>
        </>
      )}

    </section>
  );
};

export default ProductsByCategory;
