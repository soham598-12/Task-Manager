"use client";

import Header from "@/components/Header";
import TaskStats from "@/components/TaskStats";
import FilterButtons from "@/components/FilterButtons";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function TasksPage() {
  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
  } = useTasks();

  const [activeFilter, setActiveFilter] =
    useState("All");

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingCount = tasks.filter(
    (task) => !task.completed
  ).length;

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "All") {
      return true;
    }

    if (activeFilter === "Pending") {
      return !task.completed;
    }

    if (activeFilter === "Completed") {
      return task.completed;
    }

    return true;
  });

  return (
  <main className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-black mb-6">
        All Tasks
      </h1>

      <TaskStats
        total={tasks.length}
        completed={completedCount}
        pending={pendingCount}
      />

      <FilterButtons
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

    </div>
  </main>
);
}