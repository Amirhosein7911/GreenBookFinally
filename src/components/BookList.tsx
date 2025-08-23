import { getBooks } from "./data.js";
import BookCard from "./BookCard.js";

export default function BookList() {
  const books = getBooks();

  return (
    <div className="container flex gap-1 flex-wrap justify-center">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
