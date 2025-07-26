// src/store/todoStore.js
import { create } from "zustand";

export const useTodostore = create((set) => ({
  tasks: [],
  addTask: (taskText) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text: taskText }],
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  deleteAllTasks: () => set({ tasks: [] }),

  // تابع جدید برای اضافه کردن علاقه‌مندی‌ها به تسک
  addFavoriteAsTask: (bookTitle) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text: `📚 ${bookTitle}` }],
    })),
}));
