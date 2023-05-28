import Link from 'next/link';
import {prisma} from './db';
import TodoItem from '@/components/TodoItem';

const getTodos = async () => {
  return await prisma.todo.findMany();
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex items-center justify-between bg-gray-600 px-4 py-2  shadow-md">
        <h1 className="text-2xl">Note taker</h1>
        <Link
          role="button"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          href="/create"
        >
          Create note
        </Link>
      </header>
      <div className="mt-5">
        <ul className="flex flex-col gap-4">
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </>
  );
}
