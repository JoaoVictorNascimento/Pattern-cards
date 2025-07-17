"use client"

import ParticlesBackground from "./components/ParticlesBackground";
import Image from "next/image";
import PatternCard from "./components/PatternCard/card";
import { deck } from "@/patterns/deck";
import PatternsList from "./components/PatternsList/list";

import { useState } from "react";
import { HighlightedCode } from "./components/HighlightedCode";

export default function Home() {
  const [selectedPattern, setSelectedPattern] = useState<number | null>(null)
  console.log(selectedPattern)

  const code = `
  // ==== Product type ====

type Cake = {
    flavor: string
    layers: number
    frosting: string
    toppings: string[]
    hasCandle: boolean
  }
  
  // ==== Builder Interface ====
  
  type CakeBuilder = {
    setFlavor: (flavor: string) => CakeBuilder
    setLayers: (layers: number) => CakeBuilder
    setFrosting: (frosting: string) => CakeBuilder
    addTopping: (topping: string) => CakeBuilder
    addCandle: () => CakeBuilder
    build: () => Cake
  }
  
  // ==== Cake Builder Implementation ====
  
  const createCakeBuilder = (): CakeBuilder => {
    let cake: Cake = {
      flavor: 'vanilla',
      layers: 1,
      frosting: 'none',
      toppings: [],
      hasCandle: false,
    }
  
    return {
      setFlavor: (flavor) => {
        cake = { ...cake, flavor }
        return createFrom(cake)
      },
      setLayers: (layers) => {
        cake = { ...cake, layers }
        return createFrom(cake)
      },
      setFrosting: (frosting) => {
        cake = { ...cake, frosting }
        return createFrom(cake)
      },
      addTopping: (topping) => {
        cake = { ...cake, toppings: [...cake.toppings, topping] }
        return createFrom(cake)
      },
      addCandle: () => {
        cake = { ...cake, hasCandle: true }
        return createFrom(cake)
      },
      build: () => cake,
    }
  
    function createFrom(current: Cake): CakeBuilder {
      return {
        setFlavor: (flavor) => createFrom({ ...current, flavor }),
        setLayers: (layers) => createFrom({ ...current, layers }),
        setFrosting: (frosting) => createFrom({ ...current, frosting }),
        addTopping: (topping) => createFrom({ ...current, toppings: [...current.toppings, topping] }),
        addCandle: () => createFrom({ ...current, hasCandle: true }),
        build: () => current,
      }
    }
  }
  
  // ==== Client Code ====
  
  const createBirthdayCake = (builder: CakeBuilder) =>
    builder
      .setFlavor('chocolate')
      .setLayers(3)
      .setFrosting('cream cheese')
      .addTopping('strawberries')
      .addTopping('sprinkles')
      .addCandle()
      .build()
  
  // ==== Usage ====
  
  const builder = createCakeBuilder()
  const birthdayCake = createBirthdayCake(builder)
  `

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
          {selectedPattern && <div className="absolute z-2 top-46 left-4 h-20 w-78"><PatternCard {...deck[selectedPattern - 1]} /></div>}
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
    </div>
  )
}
