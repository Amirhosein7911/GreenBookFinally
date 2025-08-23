import { create } from "zustand";

export type Task = {
  id: number;
  text: string;
};

interface TodoState {
  tasks: Task[];
  addTask: (taskText: string) => void;
  deleteTask: (id: number) => void;
  deleteAllTasks: () => void;
  addFavoriteAsTask: (bookTitle: string) => void;
}

export const useTodostore = create<TodoState>((set) => ({
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
  addFavoriteAsTask: (bookTitle) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text: `📚 ${bookTitle}` }],
    })),
}));
