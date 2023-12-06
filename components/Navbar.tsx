import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold tracking-widest">JAI.DEV</span>
      </div>
      <div className="flex justify-between gap-12 text-md text-zinc-400">
        <Link href="#" className="text-black font-medium">
          Portfolio
        </Link>
        <Link href="#" className="text-black font-medium">
          Resume
        </Link>
        <Link href="#" className="text-black font-medium">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
