// src/store/favoriteStore.js
import { create } from "zustand";

export const useFavoriteStore = create((set, get) => ({
  favorites: [],
  
  addFavorite: (book) =>
    set((state) => ({
      favorites: [...state.favorites, book],
    })),
  
  removeFavorite: (bookNumber) =>
    set((state) => ({
      favorites: state.favorites.filter((b) => b.number !== bookNumber),
    })),
  
  isFavorite: (bookNumber) =>
    get().favorites.some((b) => b.number === bookNumber),
  
  toggleFavorite: (book) =>
    set((state) => {
      const exists = state.favorites.some((b) => b.number === book.number);
      if (exists) {
        return {
          favorites: state.favorites.filter((b) => b.number !== book.number),
        };
      } else {
        return { favorites: [...state.favorites, book] };
      }
    }),
}));
