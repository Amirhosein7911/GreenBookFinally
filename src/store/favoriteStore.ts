import { create } from "zustand";

export type Book = {
  number: number;
  name: string;
  amount: string;
  bgImage: string;
};

interface FavoriteState {
  favorites: Book[];
  addToFavorites: (book: any) => void;
  removeFavorite: (number: number) => void;
  isFavorite: (number: number) => boolean;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: [],
  addToFavorites: (book: Book) =>
    set((state) => ({
      favorites: [...state.favorites, book],
    })),
  removeFavorite: (number: number) =>
    set((state) => ({
      favorites: state.favorites.filter((b) => b.number !== number),
    })),
  isFavorite: (number: number) => {
    return get().favorites.some((b) => b.number === number);
  },
}));
