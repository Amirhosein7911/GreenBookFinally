import { Book } from "lucide-react";
import { create } from "zustand";

const useBookStore = create((set) => ({
  filter: "",
  favorite: [],
  setFilter: (value) => set({ filter: value }),
  clearFilter: () => set({ filter: "" }),
  setFavorite: () => set,
}));

export default useBookStore;
