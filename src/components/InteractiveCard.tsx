// InteractiveCard.tsx
"use client";

import React, { ReactNode, useState } from "react";

interface InteractiveCardProps {
  children: ReactNode;
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  // สร้าง state เพื่อติดตามสถานะการวางเมาส์
  const [isHovered, setIsHovered] = useState(false);

  // ใช้ตัวดำเนินการ + เพื่อต่อ String ของคลาส CSS แบบไดนามิก
  return (
    <div
      className={
        "w-full rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 text-center hover:shadow-2xl hover:bg-neutral-200 shadow-2xl bg-neutral-200"
      }
    >
      {children}
    </div>
  );
}
