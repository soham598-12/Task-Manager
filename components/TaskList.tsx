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
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
}: TaskListProps) {
  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          completed={task.completed}
          priority={task.priority}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}