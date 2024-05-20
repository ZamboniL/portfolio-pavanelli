"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (open) {
    return (
      <header className="p-2 fixed w-full z-20 max-w-8xl">
        <div className="p-8 justify-between items-center border rounded-[36px] border-white/15 backdrop-blur-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="h-10 w-10 rounded-md bg-white" />
              <div className="flex flex-col ">
                <span className="text-white text-sm font-bold">
                  Lucas Pavanelli.
                </span>
                <span className="text-sm text-white/50">Designer</span>
              </div>
            </div>
            <button
              className="relative flex flex-col gap-2 h-10 w-10 justify-center items-center rounded-xl bg-white"
              onClick={() => setOpen(false)}
            >
              <div className="absolute top-1/2 h-[2px] w-5 bg-black rotate-45 origin-center"></div>
              <div className="absolute top-1/2 h-[2px] w-5 bg-black -rotate-45 origin-center"></div>
            </button>
          </div>
          <nav>
            <ul className="text-2xl text-white font-medium flex flex-col gap-6 py-8 border-t border-b border-white/15 my-8">
              <li>
                <a
                  href="/"
                  className={twMerge(
                    pathname === "/" ? "text-white" : "text-white/50"
                  )}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className={twMerge(
                    pathname === "/portfolio" ? "text-white" : "text-white/50"
                  )}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  className={twMerge(
                    pathname === "/sobre" ? "text-white" : "text-white/50"
                  )}
                >
                  About
                </a>
              </li>
              <li>
                <button className="bg-violet-700 w-full rounded-full h-10 text-base">
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
    <header className="fixed w-full z-20 max-w-8xl md:top-5">
      <div
        className="px-5 py-2 border-b border-white/15 md:px-2.5 md:border md:rounded-[20px] backdrop-blur-md bg-black/60 
      md:flex md:justify-between md:items-center"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-md bg-white" />
            <div className="flex flex-col ">
              <span className="text-white text-xs font-bold md:text-sm">
                Lucas Pavanelli.
              </span>{" "}
              <span className="text-xs text-white/50 md:text-sm">Designer</span>
            </div>
          </div>
          <button
            className="flex flex-col gap-2 h-10 w-10 justify-center items-center md:hidden"
            onClick={() => setOpen(true)}
          >
            <div className="h-[2px] w-5 bg-white"></div>
            <div className="h-[2px] w-5 bg-white"></div>
          </button>
        </div>
        <nav className="hidden md:block">
          <ul
            className="text-2xl text-white font-medium flex flex-col 
        md:flex-row md:gap-12 md:border-none md:py-0 md:text-base md:my-0 md:items-center
        gap-6 py-8 border-t border-b border-white/15 my-8"
          >
            <li>
              <a
                href="/"
                className={twMerge(
                  pathname === "/" ? "text-white" : "text-white/50"
                )}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className={twMerge(
                  pathname === "/portfolio" ? "text-white" : "text-white/50"
                )}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/sobre"
                className={twMerge(
                  pathname === "/sobre" ? "text-white" : "text-white/50"
                )}
              >
                About
              </a>
            </li>
            <li>
              <button className="py-2 px-4 border border-white/15 rounded-xl text-white/50">
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
