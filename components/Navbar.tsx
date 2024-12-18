import Link from "next/link";
import React from "react";
import { Logo, Send } from "./icons";
import { navLinks } from "@/data/nav-links.data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-20">
      <Link href={"/"} className="text-[#050f1a] ">
        <Logo className="w-8 h-8 " />
      </Link>

      <div className="flex items-center justify-center gap-2">
        {navLinks.map(({ name, href }, i) => {
          const isActive = i === 0;
          return (
            <Link
              key={i}
              href={href}
              className={`capitalize px-4 py-2 rounded-full hover:bg-white hover:text-[#050f1a] font-medium duration-300 ${
                isActive ? "bg-white text-[#050f1a]" : ""
              }`}
            >
              {name}
            </Link>
          );
        })}
      </div>

      <button className="bg-white text-[#050f1a] px-4 py-2 rounded-full capitalize font-medium flex items-center justify-center gap-2">
        <Send className="w-6 h-6 -rotate-45" />
        Contact dealer
      </button>
    </nav>
  );
}
