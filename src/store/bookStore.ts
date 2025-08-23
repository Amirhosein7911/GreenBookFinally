import { create } from "zustand";

// نوع داده کتاب (بر اساس استفاده در Books.jsx)
type Book = {
  id: number;
  title: string;
  name: string;
  number: number;
};

// تعریف state برای کتاب‌ها
type BookStore = {
  filter: string;                        // برای سرچ (input)
  favorite: Book[];                      // لیست علاقه‌مندی‌ها
  setFilter: (value: string) => void;    // تغییر فیلتر
  clearFilter: () => void;               // پاک کردن فیلتر
  setFavorite: (value: Book[]) => void;  // تغییر علاقه‌مندی‌ها
};

// ساخت store با Zustand
const useBookStore = create<BookStore>((set) => ({
  filter: "",
  favorite: [],
  setFilter: (value) => set({ filter: value }),
  clearFilter: () => set({ filter: "" }),
  setFavorite: (value) => set({ favorite: value }),
}));

export default useBookStore;
