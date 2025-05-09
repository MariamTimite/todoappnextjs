
// src/components/todoItem.tsx
"use client";

import Link from "next/link";
import { ITodoItemProps } from "@/interfaces/todo";

export default function TodoItem({ todo, onToggle, onDelete }: ITodoItemProps) {
  return (
    <section className="bg-green-50">
    <tr className="border-b text-sm">
      <td className="px-4 py-2">{todo.title}</td>
      <td className="px-4 py-2">
        <button
          onClick={() => onToggle(todo.id)}
          className={`px-3 py-1 rounded ${
            todo.completed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {todo.completed ? "Terminée" : "En cours"}
        </button>
      </td>
      <td className="px-4 py-2 flex gap-2">
      <Link
  href={`/update-task/${todo.id}`}
  className="text-blue-500 hover:underline"
>
  Modifier
</Link>
        <button
  onClick={() => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
      onDelete(todo.id);
    }
  }}
  className="text-red-500 hover:underline"
>
  Supprimer
</button>
      </td>
    </tr>
    </section>
  );
}
