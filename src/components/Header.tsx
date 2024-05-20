'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (open) {
    return (
      <header className="fixed z-20 w-full max-w-8xl p-2">
        <div className="items-center justify-between rounded-[36px] border border-white/15 p-8 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="size-10 rounded-md bg-white" />
              <div className="flex flex-col ">
                <span className="text-sm font-bold text-white">Lucas Pavanelli.</span>
                <span className="text-sm text-white/50">Designer</span>
              </div>
            </div>
            <button
              className="relative flex size-10 flex-col items-center justify-center gap-2 rounded-xl bg-white"
              onClick={() => setOpen(false)}
            >
              <div className="absolute top-1/2 h-[2px] w-5 origin-center rotate-45 bg-black"></div>
              <div className="absolute top-1/2 h-[2px] w-5 origin-center -rotate-45 bg-black"></div>
            </button>
          </div>
          <nav>
            <ul className="my-8 flex flex-col gap-6 border-y border-white/15 py-8 text-2xl font-medium text-white">
              <li>
                <a href="/" className={twMerge(pathname === '/' ? 'text-white' : 'text-white/50')}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className={twMerge(pathname === '/portfolio' ? 'text-white' : 'text-white/50')}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  className={twMerge(pathname === '/sobre' ? 'text-white' : 'text-white/50')}
                >
                  About
                </a>
              </li>
              <li>
                <button className="h-10 w-full rounded-full bg-primary-600 text-base">
                  Say Hello
                </button>
              </li>
            </ul>
          </nav>
          <ul className="flex justify-center gap-8 opacity-50">
            <li>
              <a href="">
                <img src="icon/x.png" alt="x" width={20} height={20} />
              </a>
            </li>
            <li>
              <a href="">
                <img src="icon/linkedin.png" alt="x" width={20} height={20} />
              </a>
            </li>
            <li>
              <a href="">
                <img src="icon/instagram.png" alt="x" width={20} height={20} />
              </a>
            </li>
            <li>
              <a href="">
                <img src="icon/behance.png" alt="x" width={20} height={20} />
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed z-20 w-full max-w-8xl md:top-5">
      <div
        className="border-b border-white/15 bg-black/60 px-5 py-2 backdrop-blur-md md:flex md:items-center md:justify-between 
      md:rounded-[20px] md:border md:px-2.5"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="size-8 rounded-md bg-white md:size-10" />
            <div className="flex flex-col ">
              <span className="text-xs font-bold text-white md:text-sm">Lucas Pavanelli.</span>{' '}
              <span className="text-xs text-white/50 md:text-sm">Designer</span>
            </div>
          </div>
          <button
            className="flex size-10 flex-col items-center justify-center gap-2 md:hidden"
            onClick={() => setOpen(true)}
          >
            <div className="h-[2px] w-5 bg-white"></div>
            <div className="h-[2px] w-5 bg-white"></div>
          </button>
        </div>
        <nav className="hidden md:block">
          <ul
            className="my-8 flex flex-col gap-6 border-y 
        border-white/15 py-8 text-2xl font-medium text-white md:my-0 md:flex-row
        md:items-center md:gap-12 md:border-none md:py-0 md:text-base"
          >
            <li>
              <a href="/" className={twMerge(pathname === '/' ? 'text-white' : 'text-white/50')}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className={twMerge(pathname === '/portfolio' ? 'text-white' : 'text-white/50')}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/sobre"
                className={twMerge(pathname === '/sobre' ? 'text-white' : 'text-white/50')}
              >
                About
              </a>
            </li>
            <li>
              <button className="rounded-xl border border-white/15 px-4 py-2 text-white/50">
                Say Hello
              </button>
            </li>
          </ul>
        </nav>
        <ul className="hidden">
          <li>
            <a href="">
              <img src="icon/x.png" alt="x" width={20} height={20} />
            </a>
          </li>
          <li>
            <a href="">
              <img src="icon/linkedin.png" alt="x" width={20} height={20} />
            </a>
          </li>
          <li>
            <a href="">
              <img src="icon/instagram.png" alt="x" width={20} height={20} />
            </a>
          </li>
          <li>
            <a href="">
              <img src="icon/behance.png" alt="x" width={20} height={20} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
