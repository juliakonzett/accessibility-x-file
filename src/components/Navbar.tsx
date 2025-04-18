import LinkNavigation from './LinkNavigation';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <LinkNavigation
        ariaLabel={'Öffnet Navigationsseite im gleichen Tab'}
        target={false}
        href={'/linknavigation'}
        name={'Navigation'}
      />
    </nav>
  );
}
