import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useCartStore = create((set, get) => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    loading: false,

    addToCart: (product) => {
        if (product.category === "clothes" && (!product.color || !product.size)) {
            toast.error("Please select both color and size before adding to cart.");
            return;
        }

        if (product.countInStorage === 0) {
            toast.error("Sorry, now we don`t have this product");
            return
        }
        const existingCart = get().cart;
        const updateCart = [...existingCart, product]
        set({ cart: updateCart })
        localStorage.setItem("cart", JSON.stringify(updateCart));
        toast.success("Product added to cart!");
    },

    getCartItem: () => {
        const ls = JSON.parse(localStorage.getItem("cart"));
        if (ls) {
            set({ cart: ls })
        }
    },

    deleteAllItems: () => {
        set({ cart: [] });
        localStorage.removeItem("cart");
        toast.success("Cart cleared!");
    },

    deleteItem: (productId) => {
        const updatedCartItems = get().cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    },

    // В оновленому функціоналі sendMail
    sendMail: async () => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post("/mail/sendMail", get().cart); // Відправляємо кошик на сервер
            toast.success("Email sent successfully!");
        } catch (error) {
            console.error("Error sending products:", error);
            toast.error("Error sending email");
        } finally {
            set({ loading: false });
        }
    }
}));

