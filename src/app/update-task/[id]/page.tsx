"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getTodos } from "@/geteways/todo";

export default function UpdateTaskPage() {
  const router = useRouter();
  const { id } = useParams();
  const taskId = Number(id);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const todos = getTodos();
    const todo = todos.find((t) => t.id === taskId);
    if (todo) setTitle(todo.title);
  }, [taskId]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const todos = getTodos().map((todo) =>
      todo.id === taskId ? { ...todo, title } : todo
    );
    localStorage.setItem("todos", JSON.stringify(todos));
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-xl font-semibold mb-4 text-center">Modifier la tâche</h1>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Titre de la tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Modifier
        </button>
      </form>
    </div>
  );
}
