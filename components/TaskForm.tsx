"use client";

import { useState } from "react";

type TaskFormProps = {
  onAddTask: (
    title: string,
    description: string,
    priority: string
  ) => void;
};

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) return;

    onAddTask(title, description, priority);

    setTitle("");
    setDescription("");
    setPriority("High");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 text-black">
      <h2 className="text-xl font-bold mb-4 text-black">Add New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border rounded-lg p-3"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          className="bg-blue-600 text-black px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          Add Task
        </button>

      </form>
    </div>
  );
}