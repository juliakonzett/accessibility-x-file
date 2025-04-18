import Link from 'next/link';

export default function LinkNavigation({
  id,
  ariaLabel,
  target,
  href,
  name,
}: {
  id: string;
  ariaLabel: string;
  target: boolean;
  href: string;
  name: string;
}) {
  return (
    <Link
      id={id}
      aria-label={ariaLabel}
      tabIndex={0}
      target={target ? '_blank' : '_self'}
      href={href}>
      {name}
    </Link>
  );
}
