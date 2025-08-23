import { NavLink, useLocation, Outlet } from "react-router-dom";
import { getBooks } from "./data.js";
import { useState, useEffect } from "react";
import useBookStore from "../store/bookStore.js";
// import BackButton from "./BackButton";

const Books = () => {
  const location = useLocation();
  const books = getBooks();
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  const { filter, setFilter, clearFilter } = useBookStore();

  useEffect(() => {
    if (location.pathname === "/books") {
      clearFilter();
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen font-[Arial,sans-serif] bg-[#f8faf8] mr-120 mt-4">
      {/* <BackButton /> */}
      <nav className="w-[300px] pt-[150px] mr-[10px] bg-white border-r border-[#e0e0e0]">
        <input
          type="text"
          className="w-full px-[15px] py-[10px] mb-[20px] border border-[#d0e0d0] rounded text-[16px] outline-none bg-[#f5f9f5]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="جست و جوی کتاب"
        />

        <div className="flex flex-col gap-[8px]">
          {books
            .filter((book) =>
              book.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((book) => (
              <NavLink
                key={book.number}
                to={`/books/${book.number}`}
                className={({ isActive }) => {
                  const base =
                    "block px-[15px] py-[12px] rounded transition-all duration-300 border";
                  const isHovered = hoveredBook === book.number;
                  const backgroundColor = isActive
                    ? "bg-[rgba(100,160,100,1)]"
                    : isHovered
                    ? "bg-[rgba(180,215,180,0.9)]"
                    : "bg-[rgba(210,235,210,0.7)]";
                  const textColor = isActive ? "text-white" : "text-[#2d4d2d]";
                  const borderColor = isActive
                    ? "border-[rgba(80,140,80,0.5)]"
                    : "border-[rgba(180,215,180,0.3)]";
                  const translate = isHovered ? "translate-x-[3px]" : "";

                  return `${base} ${backgroundColor} ${textColor} ${borderColor} ${translate}`;
                }}
                onMouseEnter={() => setHoveredBook(book.number)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                {book.name}
              </NavLink>
            ))}
        </div>
      </nav>

      <div className="flex-1 p-[20px] bg-white">
        {/* <BackButton /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Books;
