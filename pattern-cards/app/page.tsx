import PatternCard from "./components/PatternCard/card";
import ParticlesBackground from "./components/ParticlesBackground";
import { Cog } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <PatternCard
        id={1}
        name={"Abstract Fatory"}
        image={"/abstract-factory.png"}
        description={""}
        icon={Cog}
      />
    </div>
  )
}
