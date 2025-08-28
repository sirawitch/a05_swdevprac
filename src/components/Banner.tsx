import Image from "next/image";
import React from "react";

interface BannerProps {
  imageUrl: string;
  height?: number;
}

export default function Banner({ imageUrl }: BannerProps) {
  return (
    <div className="w-full h-96 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={imageUrl}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-white"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          {"where every event finds its venue"}
        </h1>
        <p className="text-lg md:text-xl mt-2">
          {"fell free to join our event"}
        </p>
      </div>
    </div>
  );
}
