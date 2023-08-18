import React, { useState } from "react";
import { Option } from "lucide-react";
import Image from "next/image";
function HomePage() {
  return (
    <main className="flex w-6/12 flex-col space-y-6 p-5">
      <Image
        src={"/thumbnail-preview.jpeg"}
        alt="music thumbnail"
        width={500}
        height={500}
        className="w-[100%] rounded-xl"
      />
      <a className="group cursor-pointer">
        <p className="group-hover:underline text-blue-500">
          Ed Sheeran - Shape of You (Official Music Video) - YouTube
        </p>
        <p className="text-gray-200/70 text-sm">
          https://www.youtube.com › watch
        </p>
      </a>
    </main>
  );
}

export default HomePage;
