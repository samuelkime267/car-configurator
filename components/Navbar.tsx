import Link from "next/link";
import React from "react";
import { Logo, Send } from "./icons";
import Button from "@/features/experience/components/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-20 details-show">
      <Link href={"/"} className="text-pri ">
        <Logo className="w-8 h-8 " />
      </Link>

      <Button btnType="primary">
        <Send className="w-6 h-6 -rotate-45" />
        Contact dealer
      </Button>
    </nav>
  );
}
