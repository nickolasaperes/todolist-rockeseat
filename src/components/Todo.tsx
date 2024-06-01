import { Trash } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import { twJoin } from "tailwind-merge";

export interface ITodo {
  id: string;
  content: string;
  done: boolean;
}

interface TodoProps {
  todo: ITodo;
  onDelete: (todo: ITodo) => void;
  onCheck: (id: string, done: boolean) => void;
}

export function Todo({ todo, onDelete, onCheck }: TodoProps) {
  const [checked, setChecked] = useState(todo.done);

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    todo.done = event.target.checked;
    onCheck(todo.id, event.target.checked);
    setChecked(event.target.checked);
  }

  return (
    <div
      className={twJoin(
        "w-full p-5 bg-gray-500 border border-gray-400 rounded-xl flex justify-between",
        checked ? "line-through" : "",
      )}
    >
      <div className="flex gap-x-5">
        <input
          type="checkbox"
          className="checked:bg-purple"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className="text-gray-100">{todo.content}</span>
      </div>
      <button
        className="size-6 text-gray-300 hover:text-danger"
        onClick={() => onDelete(todo)}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
