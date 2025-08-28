import Link from "next/link";
import React from "react";

interface TopMenuItemProps {
  href: string;
  text: string;
}

export default function TopMenuItem({ href, text }: TopMenuItemProps) {
  return (
    <Link href={href}
      className="font-bold text-gray-800 no-underline hover:text-blue-600 transition-colors z-20"
      >
      {text}
    </Link>
  );
}
