"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function SongMenu() {
  const pathname = usePathname();
  const [currentMenu, setCurrentMenu] = useState(
    pathname === "/" ? "overview" : pathname.replace("/", "")
  );
  return (
    <div className="flex flex-row items-center space-x-4 rtl:space-x-reverse ">
      <a
        href="/"
        data-active={currentMenu.toLowerCase() === "overview"}
        className="bg-sky-900 rounded-3xl px-4 py-2 data-[active=true]:outline data-[active=true]:outline-gray-200/70"
      >
        Overview
      </a>
      <a
        href="lyrics"
        data-active={currentMenu.toLowerCase() === "lyrics"}
        className="bg-sky-900 rounded-3xl px-4 py-2 data-[active=true]:outline data-[active=true]:outline-gray-200/70"
      >
        Lyrics
      </a>
      <a
        href="videos"
        data-active={currentMenu.toLowerCase() === "videos"}
        className="bg-sky-900 rounded-3xl px-4 py-2 data-[active=true]:outline data-[active=true]:outline-gray-200/70"
      >
        Videos
      </a>
      <a
        href="listen"
        data-active={currentMenu.toLowerCase() === "listen"}
        className="bg-sky-900 rounded-3xl px-4 py-2 data-[active=true]:outline data-[active=true]:outline-gray-200/70"
      >
        Listen
      </a>
    </div>
  );
}

export default SongMenu;
