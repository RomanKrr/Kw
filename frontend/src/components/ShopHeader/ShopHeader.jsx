import { useState } from "react";
import Basket from '../Basket/Basket';
import { CiShoppingBasket } from "react-icons/ci";
import "../ShopHeader/ShopHeader.css";

const ShopHeader = ({ cat }) => {
    const [openBasket, setOpenBasket] = useState(false);

    const toggleBasket = () => {
        setOpenBasket(!openBasket);
    };

    return (
        <div className="shop_header">
            <div className="bst_btn" onClick={toggleBasket}>
                <CiShoppingBasket className="basket_logo" />
            </div>
            <Basket openBskt={openBasket} closeBasket={() => setOpenBasket(false)} />
            <div className="categories_name">
                <p>{cat}</p>
            </div>
        </div>
    );
};

export default ShopHeader;
