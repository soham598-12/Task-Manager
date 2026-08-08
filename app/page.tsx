import Header from "@/components/Header";
import TaskStats from "@/components/TaskStats";
import FilterButtons from "@/components/FilterButtons";
import TaskList from "@/components/TaskList";
import { tasks } from "@/data/tasks";
import TaskForm from "@/components/TaskForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <Header />

        <TaskStats
          total={tasks.length}
          completed={tasks.filter(task => task.completed).length}
          pending={tasks.filter(task => !task.completed).length}
        />

        <FilterButtons activeFilter="All" />

        <TaskList tasks={tasks} />
        <TaskList tasks={tasks} />

<TaskForm />
      </div>
    </main>
  );
}