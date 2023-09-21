import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { Images, Movie } from "@/typings";

interface CreateFavoriteProps {
  items: Images[];
  addItem: (data: Images) => void;
  removeItem: (id: number) => void;
}

const useFavorite = create(
  persist<CreateFavoriteProps>(
    (set, get) => ({
      items: [],
      addItem: (data: Images) => {
        set({ items: [...get().items, data] });
        toast.success("Item added to favorite.");
      },
      removeItem: (id: number) => {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
        });
        toast.success("item removed from your favorite.");
      },
    }),
    {
      name: "favorite-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFavorite;
