import PatternCard from "./components/PatternCard/card";
import ParticlesBackground from "./components/ParticlesBackground";
import { deck } from "@/patterns/deck";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <Carousel className="w-full h-full p-5 flex justify-center items-center">
        <CarouselContent>
          {deck.map((card) => (
            <PatternCard key={card.id} {...card} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
