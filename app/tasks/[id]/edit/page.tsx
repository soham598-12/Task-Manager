"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import EditTaskForm from "@/components/EditTaskForm";
import { useTasks } from "../../../context/TaskContext";

export default function EditTaskPage() {

  const params = useParams();
  const router = useRouter();

  const {
    tasks,
    updateTask,
  } = useTasks();

  const id = Number(params.id);

  const task = tasks.find(
    (task) => task.id === id
  );

  // Task doesn't exist

  if (!task) {
    return (
      <main className="min-h-screen bg-gray-100 p-8">

        <div className="max-w-3xl mx-auto">

          <div className="bg-white rounded-xl shadow-md p-8">

            <h1 className="text-3xl font-bold text-black">
              Task Not Found
            </h1>

            <p className="text-gray-600 mt-3">
              The task you are trying to edit
              does not exist.
            </p>

            <Link
              href="/tasks"
              className="inline-block mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg"
            >
              Back to Tasks
            </Link>

          </div>

        </div>

      </main>
    );
  }

  // Save changes

  const handleSave = (
    title: string,
    description: string,
    priority: string,
    completed: boolean
  ) => {

    updateTask(
      task.id,
      {
        title,
        description,
        priority,
        completed,
      }
    );

    // Go back to task details

    router.push(`/tasks/${task.id}`);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto">

        <Link
          href={`/tasks/${task.id}`}
          className="text-blue-600 hover:underline"
        >
          ← Back to Task
        </Link>

        <h1 className="text-4xl font-bold text-black mt-6 mb-6">
          Edit Task
        </h1>

        <EditTaskForm
          title={task.title}
          description={task.description}
          priority={task.priority}
          completed={task.completed}
          onSave={handleSave}
        />

      </div>

    </main>
  );
}