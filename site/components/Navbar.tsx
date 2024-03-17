import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="💪 justify-between px-4 py-2">
      <div className="font-bold">StyleGlyph</div>
      <div className="💪 justify-between items-center gap-4">
        <Link className="hover:text-gray-400" href="/docs">
          Docs
        </Link>
        <Link className="hover:text-gray-400" href="/getstarted">
          Blog
        </Link>
        <Link className="hover:text-gray-400" href="/about">
          Showcase
        </Link>
        <div className="border-r-2 h-full border-slate-400" />
        <Link
          href="https://github.com/Nicholas-Abell/StyleGlyph"
          className="hover:text-slate-400 "
        >
          <SiGithub size={20} />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
