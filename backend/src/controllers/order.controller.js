import Order from "../models/order.model.js";
export const createOrder = async (req, res) => {
    try {
        const { products } = req.body; // Отримуємо масив продуктів

        if (!products || products.length === 0) {
            return res.status(400).json({ message: "No products in order" });
        }

        const newOrder = new Order({
            products,
            totalAmount: req.body.totalAmount, 
        });

        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (error) {
        console.error("Error in create order controller", error.message);
        res.status(500).json({ message: "Server error" });
    }
};
