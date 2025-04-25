"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  useEffect(() => {
    console.log(menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-bold text-white text-xl font-default">
            Kre<span className="text-blue-400">.Holley</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300transition-colors hover:text-blue-400"
              // eslint-disable-next-line react/jsx-no-comment-textnodes
            >
              // Home
            </a>

            <a
              href="#about"
              className="text-gray-300 transition-colors hover:text-blue-400"
              // eslint-disable-next-line react/jsx-no-comment-textnodes
            >
              // About
            </a>

            <a
              href="#projects"
              className="text-gray-300 transition-colors hover:text-blue-400"
              // eslint-disable-next-line react/jsx-no-comment-textnodes
            >
              // Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 transition-colors hover:text-blue-400"
              // eslint-disable-next-line react/jsx-no-comment-textnodes
            >
              // Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
