type TaskStatsProps = {
  total: number;
  completed: number;
  pending: number;
};

export default function TaskStats({
  total,
  completed,
  pending,
}: TaskStatsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-6 flex justify-around text-center">
      <div>
        <h2 className="text-2xl font-bold text-blue-600">{total}</h2>
        <p className="text-gray-600">Total</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-green-600">{completed}</h2>
        <p className="text-gray-600">Completed</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-red-600">{pending}</h2>
        <p className="text-gray-600">Pending</p>
      </div>
    </div>
  );
}