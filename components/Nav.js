import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/">Products</Link>
      <Link href="/">Sell</Link>
      <Link href="/">Orders</Link>
      <Link href="/">Accoutn</Link>
    </nav>
  );
}
