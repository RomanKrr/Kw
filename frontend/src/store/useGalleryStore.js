import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";


export const useGalleryStore = create((set) => ({
    image: [],
    loading: false,

    createGalleryImage: async (images) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post("/gallery/createImage", images);
            set({ image: res.data.images });
            toast.success("Product has been added!");
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            set({ loading: false });
        }
    },
    // createGalleryImage: async () => {
    //     set({ loading: true });
    //     try {
    //         const res = await axiosInstance.get("/gallery/getGalleryImages");
    //         set({ image: res.data.urls });
    //     } catch (error) {
    //         console.error("Error fetching products:", error);
    //     } finally {
    //         set({ loading: false });
    //     }
    // }
}));
