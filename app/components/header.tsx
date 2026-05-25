import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-foreground/10 bg-white/95 backdrop-blur fixed top-0 left-0 z-50">
      <div className="site-shell flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="acharii" width={100} height={50} className='w-24'/>
        </Link>
        <nav className="flex items-center gap-5 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-foreground md:gap-8">
          <Link href="/products" className="transition duration-300 hover:text-secondary">
            Shop
          </Link>
          <Link href="/cart" className="transition duration-300 hover:text-secondary">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}