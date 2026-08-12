"use client";

import { useState } from "react";

type EditTaskFormProps = {
  title: string;
  description: string;
  priority: string;
  completed: boolean;

  onSave: (
    title: string,
    description: string,
    priority: string,
    completed: boolean
  ) => void;
};

export default function EditTaskForm({
  title: initialTitle,
  description: initialDescription,
  priority: initialPriority,
  completed: initialCompleted,
  onSave,
}: EditTaskFormProps) {

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] =
    useState(initialDescription);

  const [priority, setPriority] =
    useState(initialPriority);

  const [completed, setCompleted] =
    useState(initialCompleted);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    if (!description.trim()) {
      alert("Please enter a task description.");
      return;
    }

    onSave(
      title,
      description,
      priority,
      completed
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 space-y-5"
    >

      {/* Title */}

      <div>
        <label className="block text-black font-semibold mb-2">
          Task Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg p-3 text-black"
        />
      </div>

      {/* Description */}

      <div>
        <label className="block text-black font-semibold mb-2">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          rows={5}
          className="w-full border border-gray-300 rounded-lg p-3 text-black"
        />
      </div>

      {/* Priority */}

      <div>
        <label className="block text-black font-semibold mb-2">
          Priority
        </label>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg p-3 text-black"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Status */}

      <div>
        <label className="block text-black font-semibold mb-2">
          Status
        </label>

        <select
          value={
            completed
              ? "Completed"
              : "Pending"
          }
          onChange={(e) =>
            setCompleted(
              e.target.value === "Completed"
            )
          }
          className="w-full border border-gray-300 rounded-lg p-3 text-black"
        >
          <option value="Pending">
            Pending
          </option>

          <option value="Completed">
            Completed
          </option>
        </select>
      </div>

      {/* Save */}

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Save Changes
      </button>

    </form>
  );
}