export default function TaskForm() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        Add New Task
      </h2>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Task Title"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Task Description"
          rows={4}
          className="w-full border rounded-lg p-3"
        ></textarea>

        <select
          className="w-full border rounded-lg p-3"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          Add Task
        </button>

      </form>

    </div>
  );
}