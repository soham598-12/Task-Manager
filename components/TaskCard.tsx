type TaskCardProps = {
  title: string;
  description: string;
  completed: boolean;
  priority: string;
};

export default function TaskCard({
  title,
  description,
  completed,
  priority,
}: TaskCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-5">

      <h2
        className={`text-2xl font-bold ${
          completed ? "line-through text-gray-400" : "text-black"
        }`}
      >
        {title}
      </h2>

      <p className="text-gray-600 mt-2">
        {description}
      </p>

      <div className="mt-4 flex justify-between items-center">

        <div>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            {completed ? "Completed ✅" : "Pending"}
          </p>

          <p>
            <span className="font-semibold">Priority:</span> {priority}
          </p>
        </div>

        <div className="flex gap-3">

          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            {completed ? "Mark Pending" : "Mark Completed"}
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}