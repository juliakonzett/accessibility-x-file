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
      // aria-label is used for screenreaders to explain what button is going to do
      aria-label={ariaLabel}
      //
      tabIndex={0}
      // target is used to open the link in a new tab or not
      target={target ? '_blank' : '_self'}
      // href is used to link to the page
      href={href}
      // className is used to style the button
      className='font-medium bg-blue-950 text-white px-4 py-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 inline-block'>
      {/* name is the text that is displayed on the button */}
      {name}
    </Link>
  );
}
