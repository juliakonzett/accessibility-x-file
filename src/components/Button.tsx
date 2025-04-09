import Link from 'next/link';

export default function Button({ href, name }: { href: string; name: string }) {
  return (
    <Link
      aria-label='Button'
      href={href}
      className='font-medium bg-blue-950 text-white px-4 py-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 inline-block'>
      {name}
    </Link>
  );
}
