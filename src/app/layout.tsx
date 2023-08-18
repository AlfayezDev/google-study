import { Inter as FontSans } from "next/font/google";

import "~/styles/globals.css";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import Image from "next/image";
import MicrophoneIcon from "~/components/icons/microphone";
import ImageIcon from "~/components/icons/image";
import SearchIcon from "~/components/icons/search";
import SettingsIcon from "~/components/icons/settings";
import DashboardIcon from "~/components/icons/dashboard";
import SongMenu from "~/components/song-menu";
import { X } from "lucide-react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}
const Header = () => {
  return (
    <nav className="flex w-full px-6 pt-4 flex-row items-center justify-between space-x-2 md:space-x-10 rtl:space-x-reverse">
      <div className="flex flex-row items-center justify-start space-x-1 md:space-x-16 rtl:space-x-reverse w-full">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="google logo"
          className="basis-1/10 hidden md:block"
        />
        <div className="bg-[#303134] basis-full md:basis-1/2 rounded-3xl h-12 hover:shadow-md w-full flex flex-row items-center pe-6">
          <input
            type="text"
            value={"The Shape of You"}
            disabled
            readOnly
            className="w-full bg-transparent h-full focus:outline-none focus:ring-0 px-4 text-white accent-white"
          />
          <span className="text-gray-400">
            <X />
          </span>
          <span className="h-[70%] ms-2 me-2 bg-[#5F6368] w-px"></span>
          <div className="flex flex-row items-center space-x-4 rtl:space-x-reverse">
            <button className="w-4 h-4 md:w-6 md:h-6 md:block hidden">
              <MicrophoneIcon />
            </button>
            <button className="w-4 h-4 md:w-6 md:h-6 md:block hidden">
              <ImageIcon />
            </button>
            <button className="w-4 h-4 md:w-6 md:h-6 text-white fill-blue-300">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-end space-x-2 rtl:space-x-reverse">
        <button className="hover:bg-gray-700 p-1 rounded-full md:block hidden">
          <SettingsIcon className="w-6 h-6 fill-white" />
        </button>
        <button className="hover:bg-gray-700 p-1 rounded-full md:block hidden">
          <DashboardIcon className="w-6 h-6 fill-white" />
        </button>
        <button className="hover:bg-gray-700 p-1 rounded-full">
          <div className="text-lg font-bold bg-blue-500 rounded-full w-11 p-2">
            m
          </div>
        </button>
      </div>
    </nav>
  );
};
const SearchType = () => {
  return (
    <div className="flex flex-row overflow-x-scroll md:overflow-hidden items-center w-full space-x-2 rtl:space-x-reverse">
      <a className="border px-1 py-2 rounded-3xl w-[80px] text-center border-gray-200/20 hover:bg-gray-200/20 hover:cursor-pointer">
        Videos
      </a>
      <a className="border px-1 py-2 rounded-3xl w-[80px] text-center border-gray-200/20 hover:bg-gray-200/20 hover:cursor-pointer">
        Lyrics
      </a>
      <a className="border px-1 py-2 rounded-3xl w-[80px] text-center border-gray-200/20 hover:bg-gray-200/20 hover:cursor-pointer">
        Images
      </a>
      <a className="border px-1 py-2 rounded-3xl w-[80px] text-center border-gray-200/20 hover:bg-gray-200/20 hover:cursor-pointer">
        Movies
      </a>
      <a className="border px-1 py-2 rounded-3xl w-[80px] text-center border-gray-200/20 hover:bg-gray-200/20 hover:cursor-pointer">
        Actress
      </a>
      <a className="border px-1 py-2 rounded-3xl w-[80px] text-center border-gray-200/20 hover:bg-gray-200/20 hover:cursor-pointer">
        Singer
      </a>
      <a className="border px-1 py-2 rounded-3xl w-[80px] text-center border-gray-200/20 hover:bg-gray-200/20 hover:cursor-pointer">
        Music
      </a>
      <a className="border px-1 py-2 rounded-3xl w-[80px] text-center border-gray-200/20 hover:bg-gray-200/20 hover:cursor-pointer">
        Karaoke
      </a>
      <a className="border px-1 py-2 rounded-3xl w-[80px] text-center border-gray-200/20 hover:bg-gray-200/20 hover:cursor-pointer">
        Piano
      </a>
    </div>
  );
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className="w-full h-full overflow-x-hidden"
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body
        className={`min-h-screen space-y-4 py-2 bg-background text-foreground h-full w-full font-sans antialiased overflow-x-hidden ${fontSans.variable}`}
      >
        <Header />
        <SearchType />
        <div className="w-full border-t border-gray-200/20 h-px" />
        <main className="flex flex-col space-y-6">
          <p className="text-gray-200/60">
            About 5,120,000,000 results (0.47 seconds)
          </p>
          <div className="w-full px-4 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 justify-start md:justify-between">
            <span>
              <h1 className="text-3xl font-bold">Shape of You</h1>
              <p className="text-sm text-gray-200/80">Song by Ed Sheeran </p>
            </span>
            <SongMenu />
          </div>
          <div className="w-full border-t border-t-gray-200/20"></div>
          <div className="flex flex-row items-start justify-between">
            {children}
            <div className="border-s border-s-gray-200/20 flex flex-col w-1/3 p-2 h-full space-y-6">
              <h2 className="ms-4 font-bold">Listen</h2>
              <div className="flex flex-row items-center px-8 justify-between">
                <button className="flex flex-col group items-center  ">
                  <span className="w-10 h-10 rounded-full group-hover:bg-gray-200/20 border border-gray-200/20"></span>
                  <span className="group-hover:underline">Spotify</span>
                </button>
                <button className="flex flex-col group items-center  ">
                  <span className="w-10 h-10 rounded-full group-hover:bg-gray-200/20 border border-gray-200/20"></span>
                  <span className="group-hover:underline">Spotify</span>
                </button>
                <button className="flex flex-col group items-center  ">
                  <span className="w-10 h-10 rounded-full group-hover:bg-gray-200/20 border border-gray-200/20"></span>
                  <span className="group-hover:underline">Spotify</span>
                </button>

                <button className="flex flex-col group items-center  ">
                  <span className="w-10 h-10 rounded-full group-hover:bg-gray-200/20 border border-gray-200/20"></span>
                  <span className="group-hover:underline">Spotify</span>
                </button>
              </div>
              <div className="w-full border-t border-t-gray-200/20"></div>
              <h2 className="ms-4 font-bold">About</h2>
              <div className="flex flex-col items-start space-y-4 px-8 justify-between">
                <span>
                  <span className="font-bold me-1">Released:</span>
                  <span>2017</span>
                </span>
                <span>
                  <span className="font-bold me-1">Artist:</span>
                  <a className="text-blue-400">Ed Sheeran</a>
                </span>
                <span>
                  <span className="font-bold me-1">Genre:</span>
                  <a className="text-blue-400"> Pop</a>
                </span>
                <span>
                  <span className="font-bold me-1">Awards:</span>
                  <a className="text-blue-400">
                    NRJ Music Award for Most Streamed Song, MORE
                  </a>
                </span>
              </div>
            </div>
          </div>
        </main>
        <TailwindIndicator />
      </body>
    </html>
  );
}
