import TaskCard from "./TaskCard";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: string;
};

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          completed={task.completed}
          priority={task.priority}
        />
      ))}
    </div>
  );
}