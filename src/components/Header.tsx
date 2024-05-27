'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { default as NextLink } from 'next/link';
import Link from './Link';
import HeaderButton from './HeaderButton';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (open) {
    return (
      <header className="fixed z-40 w-full max-w-[1380px] p-2">
        <div className="items-center justify-between rounded-[36px] border border-white/15 p-8 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <motion.div whileTap={{ scale: 0.9 }}>
                <NextLink href="/">
                  <img
                    className="size-10 rounded-small bg-white object-cover"
                    alt=""
                    src="/about.jpeg"
                  />
                </NextLink>
              </motion.div>
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
                <Link href="/" active={pathname === '/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" active={pathname === '/portfolio'}>
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/sobre" active={pathname === '/sobre'}>
                  Sobre
                </Link>
              </li>
              <li>
                <HeaderButton isMobile />

                {/* <NextLink
                  href="/contato"
                  className="h-10 w-full rounded-full bg-primary-600 text-base"
                >
                  Contato
                </NextLink> */}
              </li>
            </ul>
          </nav>
          <ul className="flex justify-center gap-8">
            <li>
              <Link href="https://www.linkedin.com/in/lucas-pavanelli-navarro-dos-reis-14420b18a/">
                <img src="/icon/linkedin.png" alt="x" width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/lucaspavanelli/">
                <img src="/icon/instagram.png" alt="x" width={20} height={20} />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed z-40 w-full max-w-[1380px] md:top-5">
      <div
        className="border-b border-white/15 bg-black/60 px-5 py-2 backdrop-blur-md md:flex md:items-center md:justify-between 
      md:rounded-main md:border md:px-2.5"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <motion.div whileTap={{ scale: 0.9 }}>
              <NextLink href="/">
                <img
                  className="size-8 rounded-small bg-white object-cover md:size-10"
                  alt=""
                  src="/about.jpeg"
                />
              </NextLink>
            </motion.div>
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
              <Link href="/" active={pathname === '/'}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" active={pathname === '/portfolio'}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/sobre" active={pathname === '/sobre'}>
                Sobre
              </Link>
            </li>
            <li>
              <HeaderButton />
              {/* <NextLink
                href="/contato"
                className="rounded-xl border border-white/15 px-4 py-2 text-white/50"
              >
                Contato
              </NextLink> */}
            </li>
          </ul>
        </nav>
        <ul className="hidden">
          <li>
            <Link href="https://www.linkedin.com/in/lucas-pavanelli-navarro-dos-reis-14420b18a/">
              <img src="/icon/linkedin.png" alt="x" width={20} height={20} />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/lucaspavanelli/">
              <img src="/icon/instagram.png" alt="x" width={20} height={20} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
