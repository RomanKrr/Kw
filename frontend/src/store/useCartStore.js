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

    // sendMail: async () => {
    //     set({ loading: true });
    //     try {
    //         const res = await axiosInstance.post("/mail/sendMail", get().cart); // Відправляємо кошик на сервер
    //         toast.success("Email sent successfully!");
    //     } catch (error) {
    //         console.error("Error sending products:", error);
    //         toast.error("Error sending email");
    //     } finally {
    //         set({ loading: false });
    //     }
    // },

    addOrder: async () => {
        const { deleteAllItems } = get();
    
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        if (cart.length === 0) {
            toast.error("Your cart is empty!");
            return;
        }
    
        const orderData = {
            products: cart.map((item) => ({
                productName: item.productName,
                description: item.description,
                price: item.price,
                category: item.category,
                sizes: item.sizes,
                colors: item.colors,
                countInStorage: item.countInStorage,
            })),
            totalAmount: cart.reduce((sum, item) => sum + item.price, 0),
        };
    
        try {
            const response = await axiosInstance.post("/order/createOrder", orderData);
    
            if (response.status === 201) {
                toast.success("Order placed successfully!");
                deleteAllItems(); 
                localStorage.removeItem("cart");
            } else {
                toast.error("Failed to place order");
            }
        } catch (error) {
            console.error("Error creating order:", error);
            toast.error("Something went wrong");
        }
    },    
}));

