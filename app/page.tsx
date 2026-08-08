import Header from "@/components/Header";
import TaskStats from "@/components/TaskStats";
import FilterButtons from "@/components/FilterButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <Header />

        <TaskStats
          total={4}
          completed={2}
          pending={2}
        />

        <FilterButtons activeFilter="All" />

      </div>
    </main>
  );
}