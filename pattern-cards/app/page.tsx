import PatternCard from "./components/PatternCard/card";
import ParticlesBackground from "./components/ParticlesBackground";
import { deck } from "@/patterns/deck";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <Carousel className="w-full h-full flex justify-center items-center">
        <CarouselContent className="gap-x-2 md:gap-x-4">
          {deck.map((card) => (
            <CarouselItem key={card.id} className="basis-1/3">
              <PatternCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
