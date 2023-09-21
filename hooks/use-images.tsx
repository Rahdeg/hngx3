import { Images } from "@/typings";
import { create } from "zustand";

interface StoreImageProps {
    images: Images[];
    setImages: (data: Images[]) => void;
}

const useImageStore = create<StoreImageProps>((set: any) => ({
    images: [],
    setImages: (data: Images[]) => {
        set({ images: data });
    },
}));

export default useImageStore;