// src/components/Favorites.tsx
import React from "react";
import { useFavoriteStore } from "../store/favoriteStore.js";
import BookCard from "./BookCard.js";

const Favorites: React.FC = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <p className="text-center mt-10">
        هیچ کتابی در علاقه‌مندی‌ها وجود ندارد.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {favorites.map((book) => (
        <BookCard key={book.number} book={book} />
      ))}
    </div>
  );
};

export default Favorites;
