import { RxCross2 } from "react-icons/rx";
import { useCartStore } from "../../store/useCartStore";
import { useEffect, useState } from "react";
import "../Basket/Basket.css";

const Basket = ({ openBskt, closeBasket }) => {
    const { cart, getCartItem, deleteAllItems } = useCartStore();
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        if (cart) {
            getCartItem();
        }
    }, [getCartItem]);

    const handleClose = () => {
        setIsClosed(true);
        closeBasket();
    };

    return (
        <div className={`basket ${openBskt ? 'open' : ''} ${isClosed ? 'closed' : ''}`}>
            <div className="basket_container">
                <RxCross2 className="cross" onClick={handleClose} />
                <div className="items_container">
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cart.map((item, index) => (
                            <div className="item" key={index}>
                                <div className="item_container">
                                    <div className="item_img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="item_info">
                                        <div className="item_name">{item.name}</div>
                                        {item.category === "clothes" ? (
                                            <div className="item_settings">
                                                <p>COLOR: <span className={`color_dot ${item.color}`}></span></p>
                                                <p>SIZE: {item.size}</p>
                                            </div>
                                        ) : null}
                                        <div className="item_price">{item.price}$</div>
                                        <div className="item_count_container">
                                            <div className="item_add plus">+</div>
                                            <div className="item_count">1</div>
                                            <div className="item_add minus">-</div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    )}
                </div>
                <div className="basket_total">
                    <p>TOTAL: 560$</p>
                </div>
                <div className="basket_btn">
                    Proceed To Checkout
                </div>
                <div className="basket_delete_btn" onClick={deleteAllItems}>
                    Delete all products
                </div>
            </div>
        </div>
    );
};

export default Basket;
