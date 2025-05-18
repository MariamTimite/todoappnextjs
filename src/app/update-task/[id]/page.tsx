"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getTodos } from "@/geteways/todo";
import type { ITodo } from "@/interfaces/todo";

export default function UpdateTaskPage() {
  const router = useRouter();
  const { id } = useParams();
  const taskId = Number(id);

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<"En cours" | "Terminée">("En cours");

  useEffect(() => {
    const todos = getTodos();
    const todo: ITodo | undefined = todos.find((t) => t.id === taskId);
    if (!todo) return;

    setTitle(todo.title);

    // Assure-toi que la valeur de status est correcte (type-safe)
    if (todo.status === "Terminée" || todo.status === "En cours") {
      setStatus(todo.status);
    } else {
      setStatus("En cours");
    }
  }, [taskId]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const todos = getTodos().map((todo) =>
      todo.id === taskId ? { ...todo, title, status } : todo
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
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as "En cours" | "Terminée")
          }
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="En cours">En cours</option>
          <option value="Terminée">Terminée</option>
        </select>
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
