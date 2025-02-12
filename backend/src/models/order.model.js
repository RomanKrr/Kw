import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    products: [
        {
            productName: String,
            description: String,
            price: Number,
            category: String,
            sizes: [String],
            colors: [String],
            countInStorage: Number,
        },
    ],
    totalAmount: Number,
}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);
export default Order;
