"use client";

import { useState } from "react";

import Header from "@/components/Header";
import TaskStats from "@/components/TaskStats";
import FilterButtons from "@/components/FilterButtons";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

import { tasks as initialTasks } from "@/data/tasks";

export default function Home() {

  const [tasks, setTasks] = useState(initialTasks);

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

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-4xl mx-auto">

        <Header />

        <TaskStats
          total={tasks.length}
          completed={tasks.filter(task => task.completed).length}
          pending={tasks.filter(task => !task.completed).length}
        />

        <FilterButtons activeFilter="All" />

        <TaskList tasks={tasks} />

        <TaskForm onAddTask={addTask} />

      </div>

    </main>
  );
}