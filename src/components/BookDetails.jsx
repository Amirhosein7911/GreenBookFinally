import { useParams } from "react-router-dom";
import { getBooks } from "./data";
import { useFavoriteStore } from "../store/favoriteStore";
import { useTodostore } from "../store/todostore";
import heartFilled from "./assets/heart-filled.png";
import heartOutline from "./assets/heart-outline.png";

const BookDetails = () => {
  const { number } = useParams();
  const books = getBooks();
  const book = books.find((b) => b.number === parseInt(number));

  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const favorite = useFavoriteStore((state) =>
    state.favorites.some((b) => b.number === book?.number)
  );

  const addFavoriteAsTask = useTodostore((state) => state.addFavoriteAsTask);
  const deleteTask = useTodostore((state) => state.deleteTask);
  const tasks = useTodostore((state) => state.tasks);

  if (!book) {
    return <p>کتاب مورد نظر پیدا نشد!</p>;
  }

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(book.number);

      let favs = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
      favs = favs.filter((name) => name !== book.name);
      localStorage.setItem("favoriteBooks", JSON.stringify(favs));
      const task = tasks.find((t) => t.text === `${book.name}`);
      if (task) deleteTask(task.id);
    } else {
      addFavorite(book);
      let favs = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
      if (!favs.includes(book.name)) {
        favs.push(book.name);
        localStorage.setItem("favoriteBooks", JSON.stringify(favs));
      }
      if (!tasks.some((t) => t.text === ` ${book.name}`)) {
        addFavoriteAsTask(book.name);
      }
    }
  };

  return (
    <div className="mt-22 flex flex-row gap-5 p-5">
      <div className="max-w-[300px]">
        {book.bgImage && (
          <img
            src={book.bgImage}
            alt={book.name}
            className="w-full rounded-lg shadow"
          />
        )}
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-green-600 mb-2">{book.name}</h2>
        <p className="text-base text-gray-700 mb-1">
          <strong>شماره: </strong>
          {book.number}
        </p>
        <p className="text-base text-gray-700 mb-1">
          <strong>قیمت: </strong>
          {book.amount.toLocaleString()} تومان
        </p>
        <hr />
        <p className="text-base text-gray-700 mb-1">
          <strong>تاریخ: </strong>
          {new Date().toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "long",
          })}
        </p>
        {book.description && (
          <p className="text-base leading-relaxed mt-4">{book.description}</p>
        )}
        {book.pdf && (
          <div className="mt-5">
            <a
              href={book.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              دانلود PDF
            </a>
          </div>
        )}
        <div className="mt-8 flex items-center gap-4">
          {/* <button
            onClick={() => window.history.back()}
            className="fixed top-5 left-4 z-50 px-7 py-2 bg-emerald-600 text-white font-extrabold text-lg rounded-lg shadow-md hover:bg-red-800 transition-colors flex items-center gap-2 select-none"
          >
            بازگشت
          </button> */}
          <button onClick={handleFavorite} className="p-2">
            <img
              src={favorite ? heartFilled : heartOutline}
              alt={
                favorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
              }
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
