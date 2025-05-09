"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { deleteTodo } from "@/geteways/todo";
import { useEffect } from "react";

export default function DeleteTaskPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  useEffect(() => {
    if (id) {
      deleteTodo(id);
      router.push("/");
    }
  }, [id, router]);

  return (
    <div className="text-center mt-10 text-gray-600">
      Suppression en cours...
    </div>
  );
}
