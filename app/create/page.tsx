import Link from 'next/link';
import {prisma} from '../db';
import {redirect} from 'next/navigation';

async function createTodo(data: FormData) {
  'use server';

  const title = data.get('title');
  const description = data.get('description');

  if (typeof title !== 'string' || typeof description !== 'string') {
    throw new Error('Invalid form data');
  }

  await prisma.todo.create({data: {title, description, status: false}});
  redirect('/');
}

export default function Page() {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-600 px-4 py-2  shadow-md">
        <h1 className="text-2xl">Note taker</h1>
        <Link
          role="button"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          href="/"
        >
          All todos
        </Link>
      </header>
      <form action={createTodo} className="mt-4 flex flex-col gap-4">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="rounded-lg border-2 border-gray-400 bg-transparent p-2 outline-none focus:border-blue-500"
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="rounded-lg border-2 border-gray-400 bg-transparent p-2 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Create todo
        </button>
      </form>
    </>
  );
}
