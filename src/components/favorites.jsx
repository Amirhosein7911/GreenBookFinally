import useFavoriteStore from "../store/favoriteStore";
import BookCard from "../components/BookCard";

export default function Favorites() {
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
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
