"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import TaskStats from "@/components/TaskStats";
import FilterButtons from "@/components/FilterButtons";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

import { tasks as initialTasks } from "@/data/tasks";

export default function Home() {

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (
    title: string,
    description: string,
    priority: string
  ) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      priority,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : filter === "Completed"
      ? tasks.filter((task) => task.completed)
      : tasks.filter((task) => !task.completed);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <Header />

        <TaskStats
          total={tasks.length}
          completed={tasks.filter((task) => task.completed).length}
          pending={tasks.filter((task) => !task.completed).length}
        />

        <FilterButtons
          activeFilter={filter}
          onFilterChange={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        <TaskForm onAddTask={addTask} />

      </div>
    </main>
  );
}