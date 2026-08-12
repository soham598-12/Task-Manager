import type { Metadata } from "next";
import "./globals.css";
import { TaskProvider } from "./context/TaskContext";

export const metadata: Metadata = {
  title: "Task Tracker",
  description: "A task management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}