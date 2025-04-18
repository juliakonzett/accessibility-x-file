'use client';
import { useRouter } from 'next/navigation';

export default function Button({
  id,
  ariaLabel,
  route,
  name,
}: {
  id: string;
  ariaLabel: string;
  route: string;
  name: string;
}) {
  const router = useRouter();

  return (
    <button
      id={id}
      aria-label={ariaLabel}
      tabIndex={0}
      onClick={() => router.push(route)}
      className='font-medium bg-blue-950 text-white px-6 py-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 inline-block focus:outline-4 focus:outline-offset-2 focus:outline-red-500'>
      {name}
    </button>
  );
}
