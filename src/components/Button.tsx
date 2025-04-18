'use client';
import { useRouter } from 'next/navigation';

export default function Button({
  ariaLabel,
  route,
  name,
}: {
  ariaLabel: string;
  route: string;
  name: string;
}) {
  const router = useRouter();

  return (
    <button
      aria-label={ariaLabel}
      tabIndex={0}
      onClick={() => router.push(route)}
      className='font-medium bg-blue-950 text-white px-6 py-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 inline-block'>
      {name}
    </button>
  );
}
