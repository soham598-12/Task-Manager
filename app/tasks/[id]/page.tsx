"use client";

import Link from "next/link";
import { useParams ,useRouter} from "next/navigation";
import { useTasks } from "../../context/TaskContext";

export default function TaskDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { tasks, toggleTask, deleteTask } = useTasks();

  const id = Number(params.id);

  const task = tasks.find((task) => task.id === id);
    
  if (!task) {
    return (
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto">

          <div className="bg-white rounded-xl shadow-md p-8 text-center">

            <h1 className="text-3xl font-bold text-black mb-4">
              Task Not Found
            </h1>

            <p className="text-gray-600 mb-6">
              The task you are looking for does not exist.
            </p>

            <Link
              href="/tasks"
              className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
            >
              Back to Tasks
            </Link>

          </div>

        </div>
      </main>
    );
  }
  const handleDelete = () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmed) {
    return;
  }

  deleteTask(task.id);

  router.push("/tasks");
};

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto">

        <Link
          href="/tasks"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to All Tasks
        </Link>

        <div className="bg-white rounded-xl shadow-md p-8">

          <div className="flex justify-between items-start gap-4">

            <div>

              <h1 className="text-3xl font-bold text-black">
                {task.title}
              </h1>

              <p className="text-gray-600 mt-3">
                {task.description}
              </p>

            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                task.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>

          </div>

          <div className="border-t mt-8 pt-6 space-y-4">

            <div>
              <p className="text-sm text-gray-500">
                Status
              </p>

              <p className="font-semibold text-black">
                {task.completed
                  ? "Completed"
                  : "Pending"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Priority
              </p>

              <p className="font-semibold text-black">
                {task.priority}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Task ID
              </p>

              <p className="font-semibold text-black">
                {task.id}
              </p>
            </div>

          </div>

          <div className="flex gap-3 mt-8">
            <Link
  href={`/tasks/${task.id}/edit`}
  className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
>
  Edit Task
</Link>
            <button
              onClick={() => toggleTask(task.id)}
              className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
            >
              {task.completed
                ? "Mark Pending"
                : "Mark Completed"}
            </button>

            <button
  onClick={handleDelete}
  className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700"
>
  Delete
</button>

          </div>

        </div>

      </div>

    </main>
  );
  
}