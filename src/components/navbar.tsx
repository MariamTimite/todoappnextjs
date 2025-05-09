// src/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-400 to-green-500 p-4 text-white flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold">
        Ma Todo App
      </Link>
      <Link
        href="/create-task"
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        + Nouvelle tâche
      </Link>
    </nav>
  );
}
