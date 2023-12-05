import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="bg-yellow"></div>
      <div className="flex items-center gap-[1ch]">Jai.dev</div>
      <div className="flex items-center gap-[1ch]">
        <Link href="#" className="link">
          Portfolio
        </Link>
        <Link href="#" className="link">
          Resume
        </Link>
        <Link href="#" className="link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
