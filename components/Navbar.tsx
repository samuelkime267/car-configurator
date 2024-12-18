import Link from "next/link";
import React from "react";
import { Logo, Send } from "./icons";
import { navLinks } from "@/data/nav-links.data";
import Button from "@/features/experience/components/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-20">
      <Link href={"/"} className="text-pri ">
        <Logo className="w-8 h-8 " />
      </Link>

      {/* <div className="flex items-center justify-center gap-2">
        {navLinks.map(({ name, href }, i) => {
          const isActive = i === 0;
          return (
            <Link
              key={i}
              href={href}
              className={`capitalize px-4 py-2.5 rounded-full hover:bg-white hover:text-pri font-medium duration-300 ${
                isActive ? "bg-white text-pri" : ""
              }`}
            >
              {name}
            </Link>
          );
        })}
      </div> */}

      <Button btnType="primary">
        <Send className="w-6 h-6 -rotate-45" />
        Contact dealer
      </Button>
    </nav>
  );
}
