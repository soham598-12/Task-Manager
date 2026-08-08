type FilterButtonsProps = {
  activeFilter: string;
};

export default function FilterButtons({
  activeFilter,
}: FilterButtonsProps) {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        className={`px-4 py-2 rounded-lg font-medium ${
          activeFilter === "All"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        All
      </button>

      <button
        className={`px-4 py-2 rounded-lg font-medium ${
          activeFilter === "Pending"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Pending
      </button>

      <button
        className={`px-4 py-2 rounded-lg font-medium ${
          activeFilter === "Completed"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Completed
      </button>
    </div>
  );
}