"use client";
import { useState } from "react";
import { LoadingScreen } from "./_components/LoadingScreen";

import { MobileNavBar } from "./_components/MobileNavBar";
import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Pointer } from "@/components/magicui/pointer";
import { Projects } from "./_components/Projects";
import { ContactMe } from "./_components/ContactMe";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <ScrollProgress />
      <Pointer className="fill-blue-400" />
      {!isLoaded && (
        <LoadingScreen
          onComplete={() => {
            setIsLoaded(true);
          }}
        />
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#0c0c0c] text-gray-100`}
      >
        {" "}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero />
        <About />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}
