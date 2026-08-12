export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">

        <h1 className="text-4xl font-bold text-black mb-4">
          About Task Tracker
        </h1>

        <p className="text-gray-700 leading-7">
          Task Tracker is a simple task management application built
          using Next.js, React, TypeScript and Tailwind CSS.
        </p>

        <p className="text-gray-700 leading-7 mt-4">
          Users can create, manage, complete, edit and delete tasks.
          Tasks are also stored in the browser's localStorage so that
          they remain available after refreshing the page.
        </p>

        <h2 className="text-2xl font-bold text-black mt-8 mb-3">
          Technologies Used
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Browser localStorage</li>
        </ul>

      </div>
    </main>
  );
}