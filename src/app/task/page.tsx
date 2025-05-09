// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { ITodo } from "@/interfaces/todo";
// import { getTodos } from "@/geteways/todo";

// export default function TaskPage() {
//   const [task, setTask] = useState<ITodo | null>(null);
//   const searchParams = useSearchParams();
//   const id = Number(searchParams.get("id"));

//   useEffect(() => {
//     const todos = getTodos();
//     const found = todos.find((t) => t.id === id);
//     if (found) setTask(found);
//   }, [id]);

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       {task ? (
//         <>
//           <h2 className="text-xl font-bold mb-2">{task.title}</h2>
//           <p className={`mb-4 ${task.completed ? "text-green-500" : "text-yellow-500"}`}>
//             Statut: {task.completed ? "Terminée" : "En cours"}
//           </p>
//         </>
//       ) : (
//         <p>Tâche introuvable</p>
//       )}
//     </div>
//   );
// }
