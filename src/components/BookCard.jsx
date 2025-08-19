import { Link } from "react-router-dom";
import { useFavoriteStore } from "../store/favoriteStore";
import { useTodostore } from "../store/todostore";

const today = new Date();
const formattedDate = today.toLocaleDateString("fa-IR", {
  year: "numeric",
  month: "long",
});

export default function BookCard({ book }) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useFavoriteStore();
  const addFavoriteAsTask = useTodostore((state) => state.addFavoriteAsTask);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    if (isFavorite(book.number)) {
      removeFromFavorites(book.number);
    } else {
      addToFavorites(book);
      addFavoriteAsTask(book.name);
    }
  };

  return (
    <Link to={`/books/${book.number}`} className="block">
      <div className="mt-25 mx-3 shadow-2xl p-2 bg-white relative gap-0.5 w-[200px] h-[430px] transition-transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl rounded-2xl">
        <button
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 z-10"
        ></button>

        <div className="w-[180px] h-[265px] rounded-xl overflow-hidden mb-4 mx-auto">
          <img
            src={book.bgImage}
            alt={book.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div>
          <h3 className="text-lg truncate font-semibold text-green-800">
            {book.name}
          </h3>
          <p className="text-gray-600 mt-2">شماره: {book.number}</p>
          <p className="text-sm text-green-600 truncate w-35">
            قیمت: {book.amount.toLocaleString()} تومان
          </p>
          <hr className="my-4 border-t border-gray-300" />
          <p className="text-sm text-green-600">تاریخ: {formattedDate}</p>

          {book.pdf && (
            <a
              href={book.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-blue-600 text-sm"
            >
              مشاهده PDF
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}
