import { getBooks } from "./data";
import BookCard from "./BookCard";

export default function BookList() {
  const books = getBooks();

  return (
    <div className="mb-12 flex gap-x-6 item-center flex-wrap border-radius: var(--radius-sm)">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}