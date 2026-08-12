"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: string;
  createdAt: string;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (
    title: string,
    description: string,
    priority: string
  ) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, updatedTask: Partial<Task>) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [initialized, setInitialized] = useState(false);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      const defaultTasks: Task[] = [
        {
          id: 1,
          title: "Learn Next.js Components",
          description:
            "Complete the assignment on components and state.",
          completed: false,
          priority: "High",
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          title: "Explore Open Source Repositories",
          description:
            "Find three repositories related to your domain.",
          completed: true,
          priority: "Medium",
          createdAt: new Date().toISOString(),
        },
        {
          id: 3,
          title: "Practice React",
          description: "Learn useState and Props.",
          completed: false,
          priority: "Low",
          createdAt: new Date().toISOString(),
        },
      ];

      setTasks(defaultTasks);
    }

    setInitialized(true);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    if (initialized) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, initialized]);

  // CREATE
  const addTask = (
    title: string,
    description: string,
    priority: string
  ) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);
  };

  // UPDATE STATUS
  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  // DELETE
  const deleteTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  // UPDATE TASK
  const updateTask = (
    id: number,
    updatedTask: Partial<Task>
  ) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              ...updatedTask,
            }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTasks must be used inside TaskProvider"
    );
  }

  return context;
}