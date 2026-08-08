import Header from "@/components/Header";
import TaskStats from "@/components/TaskStats";
import FilterButtons from "@/components/FilterButtons";
import TaskCard from "@/components/TaskCard";

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

        <TaskCard
          title="Learn Next.js Components"
          description="Complete the assignment on components and state."
          completed={false}
          priority="High"
        />

      </div>
    </main>
  );
}