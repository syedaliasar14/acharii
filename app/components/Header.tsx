import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full pt-8 px-8">
      <Link href="/">
        <span className="font-bold">Home</span>
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}