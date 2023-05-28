'use client';

type TodoItemProps = {
  id: string;
  title: string;
  description: string;
  status: boolean;
  toggleTodoStatus: (id: string, status: boolean) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoItem({
  id,
  title,
  description,
  status,
  toggleTodoStatus,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li key={id} className="flex cursor-pointer gap-2 px-4 py-2 shadow-md ">
      <input
        type="checkbox"
        id={id}
        defaultChecked={status}
        className="cusror-pointer peer mt-[6px] self-start"
        onChange={e => toggleTodoStatus(id, e.target.checked)}
      />
      <div className="flex flex-col peer-checked:line-through">
        <label htmlFor={id} className="cursor-pointer text-gray-300">
          {title}
        </label>
        <p className={`flex-1 cursor-pointer text-gray-500`}>{description}</p>
      </div>
      <button
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
