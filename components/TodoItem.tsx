type TodoItemProps = {
  id: string;
  title: string;
  status: boolean;
};

export default function TodoItem({id, title, status}: TodoItemProps) {
  return (
    <li key={id} className="flex cursor-pointer items-center gap-2 px-4 py-2 shadow-md ">
      <input type="checkbox" id={id} className="cusror-pointer peer" />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:text-gray-400 peer-checked:line-through"
      >
        {title}
      </label>
    </li>
  );
}
