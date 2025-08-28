// Card.tsx
import Image from "next/image";
import React from "react";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div>
      <InteractiveCard>
        <div className="relative w-full h-48">
          <Image src={imgSrc} alt={venueName} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{venueName}</h3>
        </div>
      </InteractiveCard>
    </div>
  );
}
