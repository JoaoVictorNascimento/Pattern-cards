"use client"

import ParticlesBackground from "./components/ParticlesBackground";
import Image from "next/image";
import PatternCard from "./components/PatternCard/card";
import { deck } from "@/app/config/deck";
import PatternsList from "./components/PatternsList/list";
import AudioPlayer from "./components/AudioPlayer";

import { useState } from "react";
import { HighlightedCode } from "./components/HighlightedCode";
import { patterns } from "@/renderPattern";

export default function Home() {
  const [selectedPattern, setSelectedPattern] = useState<{ id: number, file: string } | null>(null)

  const code = selectedPattern ? patterns[selectedPattern.file as keyof typeof patterns] || patterns['strategy'] : patterns['strategy'];

  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center">
        <div className="relative h-[750px] w-[620px]">
          <Image
            src="/parchment2.png"
            alt="parchment"
            width={620}
            height={350}
            className="z-2 w-full h-full object-cover"
          />
          <PatternsList selectedPattern={selectedPattern} setSelectedPattern={setSelectedPattern} />
        </div>
        <div className="relative h-[850px] w-[1170px]">
          {selectedPattern && <div className="absolute z-2 top-46 left-4 h-20 w-78"><PatternCard {...deck[selectedPattern.id - 1]} /></div>}
          <Image
            src="/parchment1.png"
            alt="book"
            width={1170}
            height={850}
            className="z-1 w-full h-full object-cover"
          />
          {selectedPattern && <HighlightedCode code={code} />}
        </div>
      </div>
      <AudioPlayer audioSrc="/audio.mp3" />
    </div>
  )
}
