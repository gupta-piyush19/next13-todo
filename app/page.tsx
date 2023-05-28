import Link from 'next/link';
import TodoItem from '@/components/TodoItem';
import {prisma} from './db';

const getTodos = async () => {
  return await prisma.todo.findMany();
};

async function toggleTodoStatus(id: string, status: boolean) {
  'use server';
  await prisma.todo.update({where: {id}, data: {status}});
}

async function deleteTodo(id: string) {
  'use server';
  await prisma.todo.delete({where: {id}});
}

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
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodoStatus={toggleTodoStatus}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
