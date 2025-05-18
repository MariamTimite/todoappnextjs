"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo } from "@/geteways/todo";

export default function CreateTaskPage() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<"En cours" | "Terminée">("En cours");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title, status); // maintenant sans erreur
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-xl font-semibold mb-4 text-center">Créer une tâche</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Titre de la tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as "En cours" | "Terminée")}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="En cours">En cours</option>
          <option value="Terminée">Terminée</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
