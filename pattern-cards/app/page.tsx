"use client"

import ParticlesBackground from "./components/ParticlesBackground";
import Image from "next/image";
import PatternCard from "./components/PatternCard/card";
import { deck } from "@/patterns/deck";
import PatternsList from "./components/PatternsList/list";

import { useState } from "react";

export default function Home() {
  const [selectedPattern, setSelectedPattern] = useState<number | null>(null)
  console.log(selectedPattern)
  
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center">
        {selectedPattern && <PatternCard {...deck[selectedPattern - 1]} />}
        <div className="relative">
          <PatternsList selectedPattern={selectedPattern} setSelectedPattern={setSelectedPattern} />
          <Image src="/book.png" alt="book" width={1050} height={350} className="z-1" />
        </div>
      </div>
    </div>
  )
}
