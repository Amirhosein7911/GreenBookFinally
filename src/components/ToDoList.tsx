// src/components/ToDoList.tsx
import React, { useState, useEffect, type KeyboardEvent } from "react";
import { useTodostore, type Task } from "../store/todostore.js";
import { useFavoriteStore, type FavoriteBook } from "../store/favoriteStore.js";

const ToDoList: React.FC = () => {
  const tasks = useTodostore((state) => state.tasks);
  const addTask = useTodostore((state) => state.addTask);
  const deleteTask = useTodostore((state) => state.deleteTask);
  const deleteAllTasks = useTodostore((state) => state.deleteAllTasks);

  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const favs: string[] = JSON.parse(
      localStorage.getItem("favoriteBooks") || "[]"
    );
    favs.forEach((name) => {
      if (!tasks.some((t) => t.text === `📚 ${name}`)) {
        addTask(`📚 ${name}`);
      }
    });
  }, []);

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue("");
    }
  };

  const handleDeleteTask = (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (task && task.text.startsWith("📚")) {
      // حذف کتاب از localStorage و Zustand
      let favs: string[] = JSON.parse(
        localStorage.getItem("favoriteBooks") || "[]"
      );
      const bookName = task.text.replace("📚 ", "");
      favs = favs.filter((name) => name !== bookName);
      localStorage.setItem("favoriteBooks", JSON.stringify(favs));

      const favorites: FavoriteBook[] = useFavoriteStore.getState().favorites;
      const book = favorites.find((b) => b.name === bookName);
      if (book) removeFavorite(book.number);
    }
    deleteTask(id);
  };

  const handleDeleteAllTasks = () => {
    deleteAllTasks();
    localStorage.removeItem("favoriteBooks");

    const favorites: FavoriteBook[] = useFavoriteStore.getState().favorites;
    favorites.forEach((book) => removeFavorite(book.number));
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-200 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <header className="text-xl font-bold text-center text-green-700 mb-4">
          لیست کارها / علاقه‌مندی‌ها
        </header>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="افزودن کار جدید..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            اضافه
          </button>
        </div>

        <ul className="space-y-2 max-h-80 overflow-y-auto">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-green-50 px-3 py-2 rounded shadow"
            >
              <span>{task.text}</span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-600 font-bold hover:text-red-800 transition-colors"
              >
                حذف
              </button>
            </li>
          ))}
        </ul>

        {tasks.length > 0 && (
          <button
            onClick={handleDeleteAllTasks}
            className="mt-4 w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            حذف همه
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
