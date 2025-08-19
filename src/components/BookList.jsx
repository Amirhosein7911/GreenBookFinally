import { getBooks } from "./data";
import BookCard from "./BookCard";

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
