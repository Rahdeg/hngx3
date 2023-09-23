import { Images } from "@/typings";
import { create } from "zustand";

interface StoreImageProps {
    images: Images[];
    setImages: (data: Images[] | ((prevImages: Images[]) => Images[])) => void;
}

const useImageStore = create<StoreImageProps>((set) => ({
    images: [],
    setImages: (data) => {
        if (typeof data === "function") {
            set((state) => ({ images: data(state.images) }));
        } else {
            set({ images: data });
        }
    },
}));

export default useImageStore;
