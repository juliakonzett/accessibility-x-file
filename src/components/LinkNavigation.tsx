import Link from 'next/link';

export default function LinkNavigation({
  ariaLabel,
  target,
  href,
  name,
}: {
  ariaLabel: string;
  target: boolean;
  href: string;
  name: string;
}) {
  return (
    <Link
      aria-label={ariaLabel}
      tabIndex={0}
      target={target ? '_blank' : '_self'}
      href={href}>
      {name}
    </Link>
  );
}
