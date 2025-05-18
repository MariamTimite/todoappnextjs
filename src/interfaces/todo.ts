
export interface ITodo {
    id: number;
    title: string;
    status: "En cours" | "Terminée";
  }
  
  export interface ITodoItemProps {
    todo: ITodo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
  }
  
  export interface ITodoFormProps {
    onAdd: (title: string) => void;
  }
  
  