import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src="/acharii_text.svg"
                alt="acharii"
                priority={true}
                width={80}
                height={80}
              />
            </Link>

            <p className="mt-4 text-sm opacity-70 font-semibold">
              Homemade with Heart, Spiced with Soul
            </p>
            <p className="mt-3 text-xs opacity-70">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
