import Image from "next/image";
import React from "react";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <header className="w-full border-b border-gray-300 bg-yellow-100 fixed top-0 left-0 z-10">
      <nav className="flex items-center justify-end gap-2 px-5 py-3">
        <TopMenuItem
          href="/booking"
          text="Booking" />
        
        <Image src="/img/logo.png" alt="Company Logo" width={30} height={30} />
      </nav>
    </header>
  );
}
