type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: string;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskCard({
  id,
  title,
  description,
  completed,
  priority,
  onToggle,
  onDelete,
}: TaskCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-5">

      <h2
        className={`text-2xl font-bold ${
          completed
            ? "line-through text-gray-400"
            : "text-black"
        }`}
      >
        {title}
      </h2>

      <p className="text-gray-600 mt-2">
        {description}
      </p>

      <div className="mt-4 flex justify-between items-center">

        <div>
          <p className="text-black">
  <strong>Status:</strong>{" "}
  {completed ? "Completed ✅" : "Pending"}
</p>

<p className="text-black">
  <strong>Priority:</strong> {priority}
</p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => onToggle(id)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {completed ? "Mark Pending" : "Mark Completed"}
          </button>

          <button
            onClick={() => onDelete(id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}