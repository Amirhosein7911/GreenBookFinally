import React, { useState, useEffect } from "react";
import { useTodostore } from "../store/todostore";
import { useFavoriteStore } from "../store/favoriteStore";

const ToDoList = () => {
  const tasks = useTodostore((state) => state.tasks);
  const addTask = useTodostore((state) => state.addTask);
  const deleteTask = useTodostore((state) => state.deleteTask);
  const deleteAllTasks = useTodostore((state) => state.deleteAllTasks);

  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  const [inputValue, setInputValue] = useState("");

  // همگام‌سازی favoriteBooks با تسک‌ها در mount
  useEffect(() => {
    let favs = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
    favs.forEach((name) => {
      if (!tasks.some((t) => t.text === `📚 ${name}`)) {
        addTask(`📚 ${name}`);
      }
    });
    // eslint-disable-next-line
  }, []);

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue("");
    }
  };

  const handleDeleteTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (task && task.text.startsWith("📚")) {
      // حذف نام کتاب از localStorage
      let favs = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
      const bookName = task.text.replace("📚 ", "");
      favs = favs.filter((name) => name !== bookName);
      localStorage.setItem("favoriteBooks", JSON.stringify(favs));
      // حذف از علاقه‌مندی‌ها
      const favorites = useFavoriteStore.getState().favorites;
      const book = favorites.find((b) => b.name === bookName);
      if (book) {
        removeFavorite(book.number);
      }
    }
    deleteTask(id);
  };

  const handleDeleteAllTasks = () => {
    deleteAllTasks();
    // پاک کردن همه علاقه‌مندی‌ها از localStorage
    localStorage.removeItem("favoriteBooks");
    // پاک کردن همه علاقه‌مندی‌ها از استور
    const favorites = useFavoriteStore.getState().favorites;
    favorites.forEach((book) => {
      removeFavorite(book.number);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-200 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <header className="text-xl font-bold text-center text-green-700 mb-4">
          کتابی که باهاش حال میکنی رو اضافه کن
        </header>

        <div className="flex items-center gap-2 mr-5">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="کتاب های خودتو بنویس"
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 mr-6"
          >
            اضافه کردن
          </button>
        </div>

        <ul className="space-y-2 max-h-60 overflow-y-auto">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-100 px-4 py-4 rounded-md"
            >
              <span className="text-gray-700">{task.text}</span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                حذف
              </button>
            </li>
          ))}
        </ul>

        {tasks.length > 0 && (
          <button
            onClick={handleDeleteAllTasks}
            className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            حذف همه کتاب ها
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
