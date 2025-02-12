import React, { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";

const OrderList = () => {
    const { getAllOrders, orders } = useProductStore();

    useEffect(() => {
        getAllOrders();
    }, []);

    return (
        <div>
            {orders.length === 0 ? (
                <p>Замовлення відсутні</p>
            ) : (
                orders.map((product) => (
                    <div key={product._id} className="order-item">
                        <div>
                            <p><strong>{product.productName}</strong></p>
                            <p>Ціна: {product.product.price} грн</p>
                            <p>Категорія: {product.category}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrderList;
