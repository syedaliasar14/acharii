import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full pt-8 px-8">
      <Link href="/">
        <Image src="/acharii_text.svg" alt="acharii" width={100} height={100} />
      </Link>
      <nav className="flex items-center gap-4 md:gap-8 font-medium text-lg md:mr-2">
        <Link href="/products" className='hover:underline transition duration-300 ease-in-out'>
          products
        </Link>
        <Link href="/cart" className='hover:underline transition duration-300 ease-in-out'>
          cart
        </Link>
      </nav>
    </header>
  );
}