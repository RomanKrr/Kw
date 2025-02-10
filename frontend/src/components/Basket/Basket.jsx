import { RxCross2 } from "react-icons/rx";
import { useCartStore } from "../../store/useCartStore";
import { useEffect, useState } from "react";
import "../Basket/Basket.css";

import { CiTrash } from "react-icons/ci";

const Basket = ({ openBskt, closeBasket }) => {
    const { cart, getCartItem, deleteAllItems, deleteItem, sendMail } = useCartStore();
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

    // calculateExpenses(itemArray: ExpensesBreakDown ) {
    //     let cost: number = itemArray
    //         .map((a) => a.cost)
    //         .reduce(function (a, b) {
    //             return a + b;
    //         });
    // }


    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cart.length > 0) {
            const totalAmount = cart
                .map((item) => item.price)
                .reduce((acc, price) => acc + price, 0);
            setTotal(totalAmount);
        }
    }, [cart]);

    // const total = cart.reduce((a, b) => ({price: a.price + b.price}));
    // const deleteItem = (some) =>{
    //     console.log(some);

    // }

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
                                        <CiTrash className="delete_btn" onClick={() => deleteItem(item.id)} />
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    )}
                </div>
                <div className="basket_total">
                    <p>TOTAL: {total}$</p>
                </div>
                <div className="basket_btn" onClick={sendMail}>
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
