import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center mx-auto items-center py-8 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-lg font-semibold tracking-widest">JAI.DEV</span>
      </div>
    </nav>
  );
};

export default Navbar;
