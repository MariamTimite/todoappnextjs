"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ITodo } from "@/interfaces/todo";
import { addTodo, deleteTodo, getTodos, toggleTodo } from "@/geteways/todo";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";
import { Pencil, Trash2 } from "lucide-react";

export default function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);
  const [selectedTodoTitle, setSelectedTodoTitle] = useState("");

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const handleToggleTodo = (id: number) => {
    toggleTodo(id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.status } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-600 p-6">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Liste des Tâches</h1>

        {todos.length === 0 ? (
          <p className="text-center text-gray-500">Aucune tâche à faire</p>
        ) : (
          <table className="w-full table-fixed text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-xs">
                <th className="px-3 py-2 w-1/2">Tâche</th>
                <th className="px-3 py-2 w-1/4">Statut</th>
                <th className="px-3 py-2 w-1/4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id} className="border-b text-gray-800 hover:bg-gray-50">
                  <td className="px-3 py-2">{todo.title}</td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => handleToggleTodo(todo.id)}
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        todo.status === "Terminée"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {todo.status}
                    </button>
                  </td>
                  <td className="px-3 py-2 flex justify-center gap-4">
                    <Link href={`/update-task/${todo.id}`}>
                      <Pencil size={18} className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                    </Link>
                    <button
                      onClick={() => {
                        setModalOpen(true);
                        setSelectedTodoId(todo.id);
                        setSelectedTodoTitle(todo.title);
                      }}
                    >
                      <Trash2 size={18} className="text-red-600 hover:text-red-800 cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <ConfirmDeleteModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={() => {
            if (selectedTodoId !== null) {
              handleDeleteTodo(selectedTodoId);
              setModalOpen(false);
            }
          }}
          taskTitle={selectedTodoTitle}
        />
      </div>
    </div>
  );
}
