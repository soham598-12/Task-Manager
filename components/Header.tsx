import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-8">

      <div className="flex justify-between items-center">

        <Link href="/">
          <h1 className="text-4xl font-bold text-blue-600">
            TASK TRACKER
          </h1>
        </Link>

        <nav className="flex gap-4">

          <Link
            href="/"
            className="text-black font-medium hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            href="/tasks"
            className="text-black font-medium hover:text-blue-600"
          >
            All Tasks
          </Link>

          <Link
            href="/about"
            className="text-black font-medium hover:text-blue-600"
          >
            About
          </Link>

        </nav>

      </div>

      <p className="text-gray-600 mt-2">
        Stay organised. Get things done.
      </p>

    </header>
  );
}