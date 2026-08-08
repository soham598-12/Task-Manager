type FilterButtonsProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

export default function FilterButtons({
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => onFilterChange("All")}
        className={`px-4 py-2 rounded-lg font-medium ${
          activeFilter === "All"
            ? "bg-blue-600 text-black"
            : "bg-gray-200 hover:bg-gray-300 text-black"
        }`}
      >
        All
      </button>

      <button
        onClick={() => onFilterChange("Pending")}
        className={`px-4 py-2 rounded-lg font-medium ${
          activeFilter === "Pending"
            ? "bg-blue-600 text-black"
            : "bg-gray-200 hover:bg-gray-300 text-black"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => onFilterChange("Completed")}
        className={`px-4 py-2 rounded-lg font-medium ${
          activeFilter === "Completed"
            ? "bg-blue-600 text-black"
            : "bg-gray-200 hover:bg-gray-300 text-black"
        }`}
      >
        Completed
      </button>
    </div>
  );
}